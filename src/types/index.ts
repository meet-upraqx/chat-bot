export type ActionType =
    | { type: 'ADD_MESSAGE'; payload: Message }
    | { type: 'SET_AGENT_TYPING'; payload: boolean }
    | { type: 'CLEAR_CHAT' }
    | { type: 'HYDRATE_CHAT'; payload: ChatState };

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
  isAgentTyping: boolean;
}
export type ChatDispatch = React.Dispatch<ActionType>;

export type StreamCallback = (chunk: string) => void;
export type StreamCompleteCallback = () => void;
export type StreamErrorCallback = (error: Error) => void;

export interface ChatContextType {
  state: ChatState;
  sendMessage: (content: string, isFromAgent?: boolean) => void;
  clearChat: () => void;
  dispatch: ChatDispatch;
}