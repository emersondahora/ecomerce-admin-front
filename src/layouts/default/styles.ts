import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
export const Menu = styled.ul`
  width: 200px;
  border-right: 1px solid #ccc;
  background: #222d32;
  color: #fff;
  li {
    display: block;
    a {
      color: #fff;
      padding: 10px 20px;
      display: block;
      border-bottom: 1px solid #333;
      &.selected {
        background: #323d93;
      }
      &:hover {
        background: ${shade(0.2, '#222d32')};
      }
      &:active {
        background: ${shade(-0.5, '#222d32')};
      }
      svg {
        margin-right: 5px;
      }
    }
  }
`;
export const Content = styled.div`
  padding: 15px;
  display: flex;
  flex: 1;
  background: #ecf0f5;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
  background: #fff;
  border-top: 1px solid #d2d6de;
`;
