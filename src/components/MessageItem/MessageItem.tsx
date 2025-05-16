import React from 'react';
import type { Message } from '../../types';

interface MessageItemProps {
    message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    const isUser = message.sender === 'user';
    const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div
            className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
        >
            {!isUser && (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 flex-shrink-0">
                    <span className="text-xs font-semibold">A</span>
                </div>
            )}
            <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${isUser
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
            >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                    {formattedTime}
                </p>
            </div>
            {isUser && (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 ml-2 flex-shrink-0">
                    <span className="text-xs font-semibold">U</span>
                </div>
            )}
        </div>
    );
};

export default MessageItem;