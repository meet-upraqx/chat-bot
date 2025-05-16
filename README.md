Chat Widget Streaming Prototype
This project is a prototype of a chat widget that demonstrates streaming responses from an agent. It was built using React, TypeScript, and Tailwind CSS.

Features
💬 Chat widget that can be toggled open/closed
🔄 Streaming responses (simulated in chunks)
💾 Local storage persistence for chat history
⌨️ Agent typing indicator
📱 Responsive design (mobile & desktop)
🧑‍💼 Optional agent interface for demonstration
Project Structure
src/
├── components/             # UI components
│   ├── ChatWidget/         # The bubble button & container
│   ├── ChatWindow/         # Expanded chat window
│   ├── MessageList/        # List of conversation messages
│   ├── MessageItem/        # Individual message component
│   ├── TypingIndicator/    # Agent typing animation
│   ├── ChatInput/          # Message input field
│   └── AgentInterface/     # Demo agent view
├── context/
│   └── ChatContext.tsx     # Chat state management
├── services/
│   └── streamService.ts    # SSE streaming service
├── types/
│   └── index.ts            # TypeScript definitions
├── utils/
│   └── localStorage.ts     # Storage utilities
├── App.tsx                 # Main application component
└── main.tsx                # Entry point
Architecture Details
State Management
Uses React Context API to manage chat state across components
Chat history is persisted to localStorage and hydrated on page load
Message streaming is handled with a custom service
Streaming Implementation
Simulates Server-Sent Events (SSE) for streaming responses
Shows agent typing indicator during streaming
Demonstrates incremental updating of message content
UI Components
Reusable, self-contained components with clear responsibilities
Tailwind CSS for styling without additional CSS files
Responsive design that works on mobile and desktop
Getting Started
Install dependencies:
bash
npm install
Start the development server:
bash
npm run dev
Build for production:
bash
npm run build
Notes for Review
The streaming service is currently mocked to simulate chunks coming in over time
In a real application, you would replace this with a real SSE connection to a backend
The agent interface is purely for demonstration and would typically be a separate application
