import React, { useEffect, useRef } from 'react';
import MessageItem from '../MessageItem';
import TypingIndicator from '../TypingIndicator';
import type { Message } from '../../types';

interface MessageListProps {
    messages: Message[];
    isAgentTyping: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isAgentTyping }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isAgentTyping]);

    return (
        <div className="flex-1 overflow-y-auto p-4">
            {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500 text-center">
                        No messages yet. Start a conversation!
                    </p>
                </div>
            ) : (
                <>
                    {messages.map((message) => (
                        <MessageItem key={message.id} message={message} />
                    ))}
                    {isAgentTyping && <TypingIndicator />}
                    <div ref={messagesEndRef} />
                </>
            )}
        </div>
    );
};

export default MessageList;