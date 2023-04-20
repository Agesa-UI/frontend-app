/* eslint-disable react/prop-types */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import Image from 'next/image';
import { IInputProps } from './types';

export const InputComponent = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, errorMessage, labelStyles, symbol, symFunction, ...rest }, ref) => {
    const { id, variant = 'outline' } = rest;

    return (
      <FormControl isInvalid={!!errorMessage}>
        {label && (
          <FormLabel
            fontWeight="600"
            fontSize="12px"
            lineHeight="20px"
            color="secondary.900"
            mb="0px"
            htmlFor={id}
            {...labelStyles}
          >
            {label}
          </FormLabel>
        )}

        <InputGroup>
          <Input ref={ref} variant={variant} {...rest} />
          <InputRightElement cursor="pointer">
            {symbol && <Image src={symbol} onClick={symFunction} alt="sym" />}
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
    );
  }
);
