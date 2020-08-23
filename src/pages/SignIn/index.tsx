import React, { useRef, useCallback } from 'react';
import { FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Title, Content, Button } from './styles';

import Input from '../../components/Form/Input';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../util/getValidationErrors';

interface SignInFormData {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      formRef.current?.setErrors({});
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('E-mail inválido')
            .required('Informe o e-mail'),
          password: Yup.string().required('Informe a senha'),
        });
        await schema.validate(data, { abortEarly: false });

        await signIn({ email: data.email, password: data.password });
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
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Title>
        <span>Admin</span>
        Store
      </Title>
      <Content>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Input name="email" icon={FiUser} placeholder="Usuário" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button variant="blue" type="submit">
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
