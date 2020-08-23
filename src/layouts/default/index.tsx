import React from 'react';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiUser, FiPackage } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, Wrapper, Menu, Content, Footer } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Menu>
          <li>
            <Link to="/">
              <FiUser />
              Usuários
            </Link>
          </li>
          <li>
            <Link to="/products">
              <FiBriefcase />
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiPackage />
              Categorias
            </Link>
          </li>
        </Menu>
        <Content>{children}</Content>
      </Wrapper>
      <Footer>
        <div>Copyright© 2020 Company. All rights reserved.</div>
        <div>
          Desenvolvido por
          <strong> emersondahora</strong>
        </div>
      </Footer>
    </Container>
  );
};

export default DefaultLayout;
