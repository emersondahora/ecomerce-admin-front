import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const UpperContainer = styled.div`
  & + div {
    margin-top: 8px;
  }
`;
export const Container = styled.div<ContainerProps>`
  background: #FFF;
  border-radius: 5px;

  border: 1px solid #ddd;
  color: #ddd;

  padding:0 8px;
  width: 100%;
  display: flex;
  align-items: center;


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

  input, textarea {
    color: #666360;
    background: transparent;
    flex: 1;
    border: 0;
    &::placeholder {
      color: ${props => (props.isErrored ? '#c53030' : '#666360')} ;
    }
    height: 40px;
    line-height: 40px;
  }
  textarea {
    height: 200px;
    line-height: 20px;
    padding:10px 5px;
  }

  > svg {
    margin-right: 10px;
  }
`;

export const Error = styled.div`
  height: 20px;
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
export const ErrorMessege = styled.small`
  color: #c53030;
  padding-left: 10px;
`;
