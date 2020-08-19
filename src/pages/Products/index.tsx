import React, { useState, useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';

import IProduct from '../../interfaces/IProduct';
import { Container, Content } from './styles';

import Button from '../../components/Button';

import api from '../../services/api';

const DefaultLayout: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('/admin/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Produtos</h1>
      <Content>
        <Button variant="green">Cadastrar Produto</Button>
        {products.length && (
          <table>
            <thead>
              <tr>
                <td>Nome</td>
                <td>Preço</td>
                <td>&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td className="action">
                    <Button variant="blue">
                      <FiEdit />
                      Editar
                    </Button>
                    <Button variant="red">Excluir</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Content>
    </Container>
  );
};

export default DefaultLayout;
