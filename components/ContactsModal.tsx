import React from 'react';
import { Icon } from './Icons';

interface ContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sampleContacts = [
  { name: 'John Doe', message: 'Hey, are you available for a shoot next week?', time: '2m ago', online: true, avatar: 'https://i.pravatar.cc/48?u=john' },
  { name: 'Jane Smith', message: 'Just saw the wedding photos, they are amazing!', time: '1h ago', online: false, avatar: 'https://i.pravatar.cc/48?u=jane' },
  { name: 'Believe', message: 'Hey, I wanted to discuss the event details.', time: '3h ago', online: true, avatar: 'https://i.pravatar.cc/48?u=believe' },
  { name: 'Kofi Mensah', message: 'Can you send me the invoice?', time: 'yesterday', online: false, avatar: 'https://i.pravatar.cc/48?u=kofi' },
];

export const ContactsModal: React.FC<ContactsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-gray-800 text-white rounded-lg shadow-2xl p-6 w-full max-w-md relative animate-fade-in flex flex-col"
        style={{ maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
          <Icon name="close" className="w-6 h-6" />
        </button>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-amber-400">Direct Messages</h2>
          <p className="text-gray-400 text-sm">Your one-on-one conversations</p>
        </div>
        
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Search by name or email..."
            className="w-full bg-gray-700 text-white rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
          </span>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 -mr-2">
          <ul className="space-y-3">
            {sampleContacts.map(contact => (
              <li key={contact.name} className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <div className="relative">
                  <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover" />
                  {contact.online && <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-gray-800"></span>}
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-100 truncate">{contact.name}</h3>
                    <p className="text-xs text-gray-400">{contact.time}</p>
                  </div>
                  <p className="text-sm text-gray-400 truncate">{contact.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700">
             <button className="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                Start a New Conversation
             </button>
        </div>
      </div>
    </div>
  );
};