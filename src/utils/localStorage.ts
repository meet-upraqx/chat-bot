import type { ChatState } from '../types';


const STORAGE_KEY = 'chat_history';

export const saveToLocalStorage = (state: ChatState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving chat history to localStorage:', error);
  }
};

export const loadFromLocalStorage = (): ChatState | null => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData) as ChatState;
    }
    return null;
  } catch (error) {
    console.error('Error loading chat history from localStorage:', error);
    return null;
  }
};

export const clearLocalStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing chat history from localStorage:', error);
  }
};