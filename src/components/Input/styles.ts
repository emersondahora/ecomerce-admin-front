import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #FFF;
  border-radius: 5px;

  border: 1px solid #ddd;
  color: #ddd;

  padding:0 8px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #000;
      border-color: #000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #3b5998;
    `}

  input {
    color: #666360;
    background: transparent;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
    height: 40px;

    line-height: 40px;
  }
  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0px;
    color: #c53030;
    font-size: 20px;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
