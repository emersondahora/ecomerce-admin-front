import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'red' | 'green' | 'blue';
  loading?: boolean;
  type?: string;
  size?: 'normal' | 'small';
  icon?: React.ComponentType<IconBaseProps>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  variant,
  size = 'normal',
  icon: Icon,
  ...props
}) => (
  <Container
    type="button"
    disabled={loading}
    variant={variant}
    size={size}
    {...props}
  >
    {loading ? <FaSpinner className="spinner" /> : Icon && <Icon />}
    <span>{loading ? 'Carregando...' : children}</span>
  </Container>
);

export default Button;
