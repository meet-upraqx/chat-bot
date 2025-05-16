import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { loadFromLocalStorage, saveToLocalStorage, clearLocalStorage } from '../utils/localStorage';
import type { ActionType, ChatContextType, ChatState, Message } from '../types';

const initialState: ChatState = {
    messages: [],
    isAgentTyping: false,
};

const chatReducer = (state: ChatState, action: ActionType): ChatState => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case 'SET_AGENT_TYPING':
            return {
                ...state,
                isAgentTyping: action.payload,
            };
        case 'CLEAR_CHAT':
            return {
                ...initialState,
            };
        case 'HYDRATE_CHAT':
            return {
                ...action.payload,
            };
        default:
            return state;
    }
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(chatReducer, initialState, () => {
        const savedState = loadFromLocalStorage();
        return savedState ? { ...initialState, ...savedState } : initialState;
    });

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'chat_history') {
                const savedState = loadFromLocalStorage();
                if (savedState) {
                    dispatch({ type: 'HYDRATE_CHAT', payload: savedState });
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [dispatch]);

    useEffect(() => {
        saveToLocalStorage(state);
    }, [state]);

    const sendMessage = (content: string, isFromAgent = false) => {
        if (!content.trim()) return;

        const message: Message = {
            id: uuidv4(),
            content,
            sender: isFromAgent ? 'agent' : 'user',
            timestamp: Date.now(),
        };
        //we can add the streaming stuff here for the realistic approach 
        dispatch({ type: 'ADD_MESSAGE', payload: message });
    };

    const clearChat = () => {
        dispatch({ type: 'CLEAR_CHAT' });
        clearLocalStorage();
    };

    return (
        <ChatContext.Provider value={{ state, sendMessage, clearChat, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChatContext = (): ChatContextType => {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    return context;
};

export default ChatContext;