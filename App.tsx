
import React, { useState } from 'react';
import { Header } from './components/Header';
import { ChatWindow } from './components/ChatWindow';
import { AboutModal } from './components/AboutModal';
import { ContactsModal } from './components/ContactsModal';
import { usePwaInstall } from './hooks/usePwaInstall';

const App: React.FC = () => {
    const [isAboutModalOpen, setAboutModalOpen] = useState(false);
    const [isContactsModalOpen, setContactsModalOpen] = useState(false);
    const { canInstall, triggerInstall } = usePwaInstall();

    return (
        <div className="h-screen w-screen flex flex-col font-sans">
            <Header 
              onMenuClick={() => setAboutModalOpen(true)}
              onContactsClick={() => setContactsModalOpen(true)}
              canInstallPwa={canInstall}
              onInstallPwa={triggerInstall}
            />
            <main className="flex-1 overflow-hidden">
                <ChatWindow />
            </main>
            <AboutModal 
              isOpen={isAboutModalOpen} 
              onClose={() => setAboutModalOpen(false)} 
            />
            <ContactsModal
              isOpen={isContactsModalOpen}
              onClose={() => setContactsModalOpen(false)}
            />
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }

                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down { animation: fade-in-down 0.2s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default App;