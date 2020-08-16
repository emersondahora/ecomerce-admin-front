import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './hooks';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
