import React, { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import AgentInterface from './components/AgentInterface';
import { ChatProvider } from './context/ChatContext';

const App: React.FC = () => {
  const [showAgentInterface, setShowAgentInterface] = useState(true);

  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="py-4 bg-gray-800 rounded-xl flex flex-col gap-3 items-center">
            <h1 className="text-3xl font-bold text-slate-100">Chat Prototype</h1>
            <p className="text-lg text-slate-400">
              A Chatbot that demonstrats a streaming chat interface with local storage persistence.
            </p>
            <button
              onClick={() => setShowAgentInterface(!showAgentInterface)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition cursor-pointer"
            >
              {showAgentInterface ? 'Hide Agent Interface' : 'Show Agent Interface'}
            </button>
          </header>
          <main className='bg-white py-8'>
            {
              showAgentInterface ? 
                <AgentInterface /> : 
                <p className='text-center'>Enble the agent interface by clicking on the button above</p>
            }
          </main>
        </div>
        <ChatWidget />
      </div>
    </ChatProvider>
  );
};

export default App;