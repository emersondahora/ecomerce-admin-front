import React, { useRef, useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiPackage, FiCheck, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import PageContainer from '../../components/PageContainer';
import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';
import Currency from '../../components/Form/Currency';
import Button from '../../components/Form/Button';

import { Form, ButtonGrup } from './styles';

import IProduct from '../../interfaces/IProduct';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../util/getValidationErrors';

const Products: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { product_id } = useParams();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product_id !== 'new') {
      api
        .get(`/admin/products/${product_id}`)
        .then(response => {
          // console.log(response.data);
          formRef.current?.setData(response.data);
        })
        .catch(() => {
          addToast({
            type: 'error',
            title: 'Produto não encontrato',
          });
          history.push('/products');
        });
    }
  }, [product_id, addToast, history]);

  const handleSubmit = useCallback(async (data: IProduct) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Informe o nome do produto'),
        description: Yup.string().required('Informe a descrição do produto'),
        price: Yup.string().required('Informe o preço do produto'),
      });
      await schema.validate(data, { abortEarly: false });

      setLoading(true);
      if (product_id !== 'new') {
        await api.put(`/admin/products/${product_id}`, data);
      } else {
        await api.post(`/admin/products/`, data);
      }
      addToast({
        type: 'success',
        title: 'Produto salvo com sucesso',
      });
      history.push('/products');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      } else {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, verifique o usuário e senha informados',
        });
      }
    }
    setLoading(false);
  }, []);
  const handleCancel = useCallback(() => history.goBack(), [history]);
  return (
    <PageContainer title="Cadastrar Produtos" icon={FiPackage}>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input placeholder="Nome do produto" name="name" />
        <Textarea placeholder="Descrição do produto" name="description" />
        <Currency name="price" placeholder="Preço do Produto" />
        <ButtonGrup>
          <Button onClick={handleCancel} variant="red" icon={FiArrowLeft}>
            <span>Voltar</span>
          </Button>
          <Button
            type="submit"
            variant="green"
            icon={FiCheck}
            loading={loading}
          >
            <span>Salvar</span>
          </Button>
        </ButtonGrup>
      </Form>
    </PageContainer>
  );
};

export default Products;
