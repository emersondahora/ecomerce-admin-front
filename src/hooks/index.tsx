import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { DialogProvider } from './dialog';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <DialogProvider>
      <ToastProvider>{children}</ToastProvider>
    </DialogProvider>
  </AuthProvider>
);

export default AppProvider;
