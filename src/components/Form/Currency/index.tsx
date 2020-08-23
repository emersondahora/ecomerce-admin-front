import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import * as CurrencyFormat from 'react-currency-format';
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
  const [currencyValue, setCurrencyValue] = useState(defaultValue);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      setValue: (ref: any, value: number) => {
        setCurrencyValue(String(value));
      },
      getValue: (ref: any) => {
        return ref.state.numAsString;
      },
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
        <CurrencyFormat
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          prefix="R$ "
          fixedDecimalScale
          allowNegative={false}
          isNumericString
          onFocus={() => handleInputBlurOrFocus(true)}
          onBlur={() => handleInputBlurOrFocus(false)}
          {...props}
          name={name}
          ref={inputRef}
          value={currencyValue}
          onValueChange={({ value }) => setCurrencyValue(value)}
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
