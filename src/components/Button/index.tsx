import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'red' | 'green' | 'blue';
  loading?: boolean;
  type?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  variant,
  ...props
}) => (
  <Container type="button" disabled={loading} variant={variant} {...props}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
