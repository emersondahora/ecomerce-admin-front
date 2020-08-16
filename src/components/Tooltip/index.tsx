import React from 'react';

import { Container } from './styles';

interface TolltipProps {
  title: string;
}

const Tooltip: React.FC<TolltipProps> = ({ title, children, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
