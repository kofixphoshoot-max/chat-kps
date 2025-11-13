
import React, { useState, useRef, ChangeEvent } from 'react';
import { Icon } from './Icons';

interface ChatInputProps {
  onSendMessage: (text: string, file?: File) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [text, setText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onSendMessage(text.trim());
      setText('');
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onSendMessage(text || `Attached: ${file.name}`, file);
      setText('');
      e.target.value = ''; // Reset input
    }
  };

  return (
    <form onSubmit={handleSendMessage} className="p-3 bg-gray-800 flex items-center gap-2 border-t border-gray-700">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange}
        accept="image/*,video/mp4,video/quicktime"
        className="hidden" 
      />
      <input 
        type="file" 
        ref={cameraInputRef} 
        onChange={handleFileChange}
        accept="image/*"
        capture="user"
        className="hidden" 
      />
      <button type="button" onClick={() => fileInputRef.current?.click()} className="p-2 text-gray-400 hover:text-amber-400 rounded-full transition-colors" disabled={isLoading} title="Attach file">
        <Icon name="paperclip" className="w-6 h-6" />
      </button>
      <button type="button" onClick={() => cameraInputRef.current?.click()} className="p-2 text-gray-400 hover:text-amber-400 rounded-full transition-colors" disabled={isLoading} title="Use camera">
        <Icon name="camera" className="w-6 h-6" />
      </button>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                handleSendMessage(e);
            }
        }}
        placeholder="Type a message..."
        className="flex-1 bg-gray-700 text-white rounded-2xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 max-h-24"
        rows={1}
        disabled={isLoading}
      />
      <button type="submit" className="p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 disabled:bg-gray-600 transition-colors" disabled={isLoading || !text.trim()}>
        <Icon name="send" className="w-6 h-6" />
      </button>
    </form>
  );
};
