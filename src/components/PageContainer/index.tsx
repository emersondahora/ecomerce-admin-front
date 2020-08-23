import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Content } from './styles';

type PageContainerProps = {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
  header?: React.ComponentType;
};

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  icon: Icon,
  header: Header,
}) => {
  return (
    <Container>
      <h1>
        {Icon && <Icon />}
        <span>{title}</span>
      </h1>
      <Content>
        {Header && (
          <header>
            <Header />
          </header>
        )}
        {children}
      </Content>
    </Container>
  );
};

export default PageContainer;
