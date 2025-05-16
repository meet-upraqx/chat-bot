import React, { useState } from 'react';
import ChatWindow from '../ChatWindow';

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleChat}
                className={`fixed bottom-4 right-4 md:right-8 w-14 h-14 rounded-full cursor-pointer bg-blue-500 text-white shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50 ${isOpen ? 'hidden' : 'block'}`}
                aria-label="Open chat"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                </svg>
            </button>

            {isOpen && <ChatWindow onClose={toggleChat} />}
        </>
    );
};

export default ChatWidget;