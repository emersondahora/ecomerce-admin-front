import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import DialogContainer from '../components/DialogContainer';

export interface DialogMessage {
  id: string;
  // type?: 'alert' | 'confirm';
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  onConfirm(): void;
}

interface DialogContextData {
  addDialog(message: Omit<DialogMessage, 'id'>): void;
  removeDialog(id: string): void;
}

const DialogContext = createContext<DialogContextData>({} as DialogContextData);

const DialogProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<DialogMessage[]>([]);
  const addDialog = useCallback(
    ({ title, type, description, onConfirm }: Omit<DialogMessage, 'id'>) => {
      const id = uuid();
      const Dialog = { id, title, type, description, onConfirm };
      setMessages(prevState => [...prevState, Dialog]);
    },
    [],
  );
  const removeDialog = useCallback((id: string) => {
    setMessages(prevState => prevState.filter(message => message.id !== id));
  }, []);
  return (
    <DialogContext.Provider value={{ addDialog, removeDialog }}>
      {children}
      <DialogContainer messages={messages} />
    </DialogContext.Provider>
  );
};

function useDialog(): DialogContextData {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}

export { DialogProvider, useDialog };
