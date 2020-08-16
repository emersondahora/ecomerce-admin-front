import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #3b5998;
  border-radius: 5px;
  border: 0;
  height: 36px;
  padding: 0 16px;
  width: 100%;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#3b5998')};
  }
  &:active {
    background: ${shade(0.5, '#3b5998')};
  }
`;
