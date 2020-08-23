import styled, { css } from 'styled-components';
import { shade } from 'polished';

type ButtonProps = {
  variant?: 'default' | 'red' | 'green' | 'blue';
  size?: 'normal' | 'small';
};

const styleTypeVariants = {
  default: css`
    background: #d2d6de;
    color: #666666;
    &:hover {
      background: ${shade(0.1, '#d2d6de')};
    }
    &:active {
      background: ${shade(0.3, '#d2d6de')};
    }
  `,
  red: css`
    background: #dd4b39;
    color: #fff;
    &:hover {
      background: ${shade(0.2, '#dd4b39')};
    }
    &:active {
      background: ${shade(0.5, '#dd4b39')};
    }
  `,
  green: css`
    background: #00a65a;
    color: #fff;
    &:hover {
      background: ${shade(0.2, '#00a65a')};
    }
    &:active {
      background: ${shade(0.5, '#00a65a')};
    }
  `,
  blue: css`
    background: #337ab7;
    color: #fff;
    &:hover {
      background: ${shade(0.2, '#337ab7')};
    }
    &:active {
      background: ${shade(0.5, '#337ab7')};
    }
  `,
};

const sizeStyle = {
  normal: css`
    padding: 10px 16px;
  `,
  small: css`
    padding: 4px 8px;
    font-size: 12px;
  `,
};

export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-around;
  border-radius: 3px;
  border: 0;
  font-weight: 700;
  margin: 0 5px;
  transition: background 0.2s;
  ${props => styleTypeVariants[props.variant || 'default']}
  ${props => sizeStyle[props.size || 'normal']}

  svg {
    margin-right: 5px;
    font-size: 1em;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
