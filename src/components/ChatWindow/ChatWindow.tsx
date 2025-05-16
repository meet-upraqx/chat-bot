import React from 'react';
import MessageList from '../MessageList';
import ChatInput from '../ChatInput';
import { useChatContext } from '../../context/ChatContext';

interface ChatWindowProps {
    onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
    const { state, sendMessage, clearChat } = useChatContext();

    return (
        <div className="fixed bottom-20 right-4 md:right-8 w-80 md:w-96 h-[600px] bg-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50">
            <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                    <h3 className="font-medium">Chat Support</h3>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={clearChat}
                        className="text-white hover:text-blue-200 transition cursor-pointer"
                        title="Clear chat"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-blue-200 transition cursor-pointer"
                        title="Close chat"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <MessageList
                messages={state.messages}
                isAgentTyping={state.isAgentTyping}
            />
            <ChatInput
                onSendMessage={sendMessage}
                disabled={state.isAgentTyping}
            />
        </div>
    );
};

export default ChatWindow;