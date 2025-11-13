
import React from 'react';
import type { Message as MessageType } from '../types';

interface MessageProps {
  message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  const baseClasses = "max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-2xl mb-2 break-words";
  const userClasses = "bg-amber-600 text-white self-end rounded-br-lg";
  const aiClasses = "bg-gray-700 text-white self-start rounded-bl-lg";

  return (
    <div className={`${baseClasses} ${isUser ? userClasses : aiClasses}`}>
      {message.image && (
        <img 
          src={message.image} 
          alt="User upload" 
          className="rounded-lg mb-2 max-h-64 w-full object-cover"
        />
      )}
      {message.isLoading ? (
         <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      ) : (
        <p className="whitespace-pre-wrap">{message.text}</p>
      )}
    </div>
  );
};
