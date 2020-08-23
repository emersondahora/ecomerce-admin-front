import styled from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasdescription?: number;
}
export const FixedBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
`;

export const Container = styled(animated.div)<ToastProps>`
  width: 500px;
  position: absolute;
  padding: 0;
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
`;
export const Title = styled.div`
  position: relative;
  border-bottom: 1px solid #ccc;
  background: #3c8dbc;
  color: #fff;
  font-size: 25px;
  padding: 10px 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  span {
    text-align: center;
  }
  button {
    position: absolute;
    right: 10px;
    background: transparent;
    border: 0;
    color: inherit;
    font-size: inherit;
  }
`;

export const Message = styled.div`
  padding: 15px;
`;
export const ButtonGroup = styled.div`
  border-top: 1px solid #ccc;
  color: #fff;
  font-size: 25px;
  padding: 5px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: flex-end;

  button {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
