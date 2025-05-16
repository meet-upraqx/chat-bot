import React, { useState } from 'react';
import { useChatContext } from '../../context/ChatContext';
import MessageItem from '../MessageItem';

const AgentInterface: React.FC = () => {
    const { state, sendMessage, clearChat, dispatch } = useChatContext();
    const [agentReply, setAgentReply] = useState('');

    const handleSendReply = () => {
        if (agentReply.trim()) {
            sendMessage(agentReply, true);
            setAgentReply('');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Agent Interface</h1>
                    <button
                        onClick={clearChat}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition cursor-pointer"
                    >
                        Clear Chat
                    </button>
                </div>

                <div className="h-96 overflow-y-auto p-4 bg-gray-50">
                    {state.messages.length === 0 ? (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500">No messages yet.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {state.messages.map((message) => (
                                <MessageItem key={message.id} message={message} />
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-4 border-t border-gray-200">
                    <div className="flex">
                        <input
                            value={agentReply}
                            onChange={(e) => {
                                setAgentReply(e.target.value);
                                dispatch({ type: 'SET_AGENT_TYPING', payload: true });
                            }}
                            onBlur={() => dispatch({ type: 'SET_AGENT_TYPING', payload: false })}
                            placeholder="Type your reply as an agent..."
                            className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleSendReply();
                                }
                            }}
                        />
                        <button
                            onClick={handleSendReply}
                            disabled={!agentReply.trim()}
                            className={`bg-blue-500 text-white px-4 rounded-r-lg ${!agentReply.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentInterface;