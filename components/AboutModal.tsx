
import React from 'react';
import { Icon } from './Icons';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialLinks = [
    { name: 'Website', href: 'https://kofixphotography.netlify.app/', icon: 'globe' },
    { name: 'WhatsApp', href: 'https://wa.me/233501184458', icon: 'whatsapp' },
    { name: 'Facebook', href: 'https://www.facebook.com/share/1AZRpmUnp5/', icon: 'facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/kofix_photography_studio', icon: 'instagram' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@kofixphoshoot', icon: 'tiktok' },
    { name: 'YouTube', href: 'https://www.youtube.com/@KofixphotographyStudio', icon: 'youtube' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kofix-photography-studio-6b8768360', icon: 'linkedin' },
];

const contactInfo = {
    'Business Name': 'Kofix Photography Studio',
    'Owner': 'Believe',
    'Email': 'Kofixphoshoot@gmail.com',
    'Phone / WhatsApp': '0534349054 / 0501184458',
};

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-gray-800 text-white rounded-lg shadow-2xl p-6 w-full max-w-md relative animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <Icon name="close" className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center text-center">
            <Icon name="kps-logo" className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-amber-400">Kofix Photography Studio</h2>
            <p className="text-gray-400 mt-1">Owned by Believe</p>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4">
            <h3 className="text-lg font-semibold text-amber-300 mb-2">Contact Information</h3>
            <ul className="text-left space-y-2 text-gray-300">
                {Object.entries(contactInfo).map(([key, value]) => (
                    <li key={key}>
                        <span className="font-semibold text-gray-100">{key}:</span> {value}
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="mt-6 border-t border-gray-700 pt-4">
             <h3 className="text-lg font-semibold text-amber-300 mb-3 text-center">Connect with us</h3>
             <div className="flex justify-center flex-wrap gap-4">
                {socialLinks.map(link => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-amber-400 transition-colors flex flex-col items-center space-y-1 text-xs"
                        title={link.name}
                    >
                       <span className="text-2xl">{getIcon(link.icon)}</span>
                       <span>{link.name}</span>
                    </a>
                ))}
             </div>
        </div>
      </div>
    </div>
  );
};

// Dummy social icons for demonstration
const getIcon = (name: string) => {
    switch(name) {
        case 'globe': return '🌐';
        case 'whatsapp': return '💬';
        case 'facebook': return '📘';
        case 'instagram': return '📸';
        case 'tiktok': return '🎵';
        case 'youtube': return '▶️';
        case 'linkedin': return '🔗';
        default: return '🔗';
    }
}
