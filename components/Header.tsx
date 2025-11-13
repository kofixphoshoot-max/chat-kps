
import React, { useState } from 'react';
import { Icon } from './Icons';

interface HeaderProps {
  onMenuClick: () => void;
  onContactsClick: () => void;
  canInstallPwa: boolean;
  onInstallPwa: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onContactsClick, canInstallPwa, onInstallPwa }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };
  
  const handleAboutClick = () => {
    onMenuClick();
    setMenuOpen(false);
  }

  const handleInstallClick = () => {
    onInstallPwa();
    setMenuOpen(false);
  }

  return (
    <header className="bg-gray-800 text-white p-3 flex justify-between items-center shadow-md sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <Icon name="kps-logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-amber-400 tracking-wider">
          Kofix Photography
        </h1>
      </div>
      <div className="flex items-center gap-2">
         <button onClick={onContactsClick} className="relative p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500" title="Direct Messages">
            <Icon name="user-circle" className="w-6 h-6" />
        </button>
         <button className="relative p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500" title="Notifications">
            <Icon name="notification" className="w-6 h-6" />
            <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-800"></span>
        </button>
        <div className="relative">
            <button onClick={handleMenuToggle} className="p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500">
            <Icon name="menu" className="w-6 h-6" />
            </button>
            {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-50 animate-fade-in-down">
                <button
                onClick={handleAboutClick}
                className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-amber-400"
                >
                About / Contact
                </button>
                {canInstallPwa && (
                <button
                    onClick={handleInstallClick}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-amber-400"
                >
                    Install App
                </button>
                )}
                <a
                href="https://kofixphotography.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-amber-400"
                >
                Visit Website
                </a>
            </div>
            )}
        </div>
      </div>
    </header>
  );
};
