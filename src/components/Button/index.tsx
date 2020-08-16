import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...props }) => (
  <Container type="button" disabled={loading} {...props}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
