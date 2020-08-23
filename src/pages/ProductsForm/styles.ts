import styled from 'styled-components';
import { Form as FormBase } from '@unform/web';

export const Form = styled(FormBase)`
  max-width: 1000px;
  margin-left: 20px;
`;
export const ButtonGrup = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  button + button {
    margin-left: 10px;
  }
  button {
    max-width: 300px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
