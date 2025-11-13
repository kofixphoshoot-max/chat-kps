
import React, { useState, useEffect, useRef } from 'react';
import type { Message as MessageType } from '../types';
import { Message } from './Message';
import { ChatInput } from './ChatInput';
import { sendMessageStream } from '../services/geminiService';

const fileToBase64 = (file: File): Promise<{mimeType: string, data: string}> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const result = reader.result as string;
        const [header, data] = result.split(',');
        const mimeType = header.match(/:(.*?);/)?.[1] || file.type;
        resolve({ mimeType, data });
    };
    reader.onerror = (error) => reject(error);
  });
};

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message from AI
    setMessages([
      {
        id: 'initial-ai-message',
        sender: 'ai',
        text: 'Welcome to Kofix Photography Studio! How can I assist you today?',
      },
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text: string, file?: File) => {
    setIsLoading(true);
    const userMessageId = `user-${Date.now()}`;
    let imagePayload;
    let imageDisplayUrl;

    if (file) {
        try {
            const { mimeType, data } = await fileToBase64(file);
            imagePayload = { mimeType, data };
            imageDisplayUrl = `data:${mimeType};base64,${data}`;
        } catch(error) {
            console.error("Error converting file to base64:", error);
            setIsLoading(false);
            // Optionally, show an error message to the user
            return;
        }
    }

    const userMessage: MessageType = {
        id: userMessageId,
        sender: 'user',
        text,
        image: imageDisplayUrl
    };
    
    const aiThinkingMessage: MessageType = {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: '',
      isLoading: true,
    };

    setMessages(prev => [...prev, userMessage, aiThinkingMessage]);

    try {
      const stream = await sendMessageStream(text, imagePayload);
      
      let fullResponse = '';
      let hasReceivedChunks = false;
      
      for await (const chunk of stream) {
          hasReceivedChunks = true;
          fullResponse += chunk.text;
          setMessages(prev => {
              return prev.map(msg => 
                  msg.id === aiThinkingMessage.id 
                      ? { ...msg, text: fullResponse } 
                      : msg
              );
          });
      }

      // After stream is finished, update the message's loading state and content.
      setMessages(prev => {
        return prev.map(msg => {
          if (msg.id === aiThinkingMessage.id) {
            return {
              ...msg,
              text: hasReceivedChunks ? fullResponse : "Sorry, I couldn't process that. Please try again.",
              isLoading: false,
            };
          }
          return msg;
        });
      });

    } catch (error) {
        console.error('Error sending message:', error);
        const errorMessage: MessageType = {
            id: `err-${Date.now()}`,
            sender: 'ai',
            text: 'Sorry, I encountered an error. Please try again.',
        };
        setMessages(prev => [...prev.filter(m => m.id !== aiThinkingMessage.id), errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="p-3 text-center text-xs text-gray-500">
          This is an AI-assisted chat. A copy of this conversation will be forwarded to the Kofix Photography team.
          <br/>
          (Note: WhatsApp/SMS forwarding is a simulation and requires backend implementation.)
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};
