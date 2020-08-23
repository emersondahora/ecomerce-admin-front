import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiEdit, FiPackage, FiTrash2 } from 'react-icons/fi';

import IProduct from '../../interfaces/IProduct';
import { Table } from './styles';

import Button from '../../components/Form/Button';
import PageContainer from '../../components/PageContainer';

import api from '../../services/api';
import { useDialog } from '../../hooks/dialog';
import { useToast } from '../../hooks/toast';
import { formatPrice } from '../../util/format';

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const history = useHistory();
  const { addDialog } = useDialog();
  const { addToast } = useToast();

  const findProducts = useCallback(() => {
    api.get('/admin/products').then(response => {
      setProducts(response.data);
    });
  }, []);
  useEffect(findProducts, []);

  const productFormHandle = (product_id?: string) => {
    history.push(`/products/${product_id || 'new'}`);
  };

  const productDeleteHandle = useCallback(
    async (product: IProduct) => {
      // await api.delete(`/admin/products/${product.id}`);
      addDialog({
        title: 'Exclusão de Produto',
        description: `Deseja excluír o produto "${product.name}" ?`,
        onConfirm: async () => {
          try {
            await api.delete(`/admin/products/${product.id}`);
            findProducts();
            addToast({
              title: 'Produto excluído com sucesso',
              type: 'success',
            });
          } catch {
            addToast({
              title: 'Falha ao excluir produto',
              type: 'error',
            });
          }
        },
      });
    },
    [addDialog],
  );

  return (
    <PageContainer
      title="Produtos"
      icon={FiPackage}
      header={() => (
        <Button onClick={() => productFormHandle()} variant="green">
          Cadastrar Produto
        </Button>
      )}
    >
      {products.length > 0 && (
        <Table>
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
                <td>{formatPrice(product.price)}</td>
                <td className="action">
                  <Button
                    variant="blue"
                    size="small"
                    onClick={() => productFormHandle(product.id)}
                    icon={FiEdit}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="red"
                    size="small"
                    icon={FiTrash2}
                    onClick={() => productDeleteHandle(product)}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </PageContainer>
  );
};

export default Products;
