import React from 'react';

import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

const DefaultLayout: React.FC = ({ children }) => {
  const { signOut } = useAuth();
  return (
    <div>
      <Button type="button" onClick={signOut}>
        Sair
      </Button>
      {children}
    </div>
  );
};

export default DefaultLayout;
