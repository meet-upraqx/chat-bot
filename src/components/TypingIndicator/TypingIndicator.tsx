import React from 'react';

const TypingIndicator: React.FC = () => {
    return (
        <div className="flex justify-start mb-4">
            <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg rounded-bl-none">
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
};

export default TypingIndicator;