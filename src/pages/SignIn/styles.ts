import styled from 'styled-components';

import ButtonComponent from '../../components/Form/Button';

export const Button = styled(ButtonComponent)`
  width: 100%;
  margin-top: 16px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 7% auto;
`;
export const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  color: #444;
  font-weight: 300;
  margin-bottom: 25px;

  span {
    font-weight: 700;
  }
`;
export const Content = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
`;
