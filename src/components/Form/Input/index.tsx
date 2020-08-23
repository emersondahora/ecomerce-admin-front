import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import CSS from 'csstype';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error, ErrorMessege, UpperContainer } from '../styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: CSS.Properties<string | number>;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle,
  icon: Icon,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlurOrFocus = useCallback(propsIsFocused => {
    setIsFocused(propsIsFocused);
    if (!propsIsFocused) setIsFilled(!!inputRef.current?.value);
  }, []);
  return (
    <UpperContainer>
      <Container
        style={containerStyle}
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
      >
        {Icon && <Icon />}
        <input
          onFocus={() => handleInputBlurOrFocus(true)}
          onBlur={() => handleInputBlurOrFocus(false)}
          defaultValue={defaultValue}
          {...props}
          name={name}
          ref={inputRef}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle />
          </Error>
        )}
      </Container>
      <ErrorMessege>{error}</ErrorMessege>
    </UpperContainer>
  );
};

export default Input;
