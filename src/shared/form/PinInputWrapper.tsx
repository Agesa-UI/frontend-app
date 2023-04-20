/* eslint-disable react/require-default-props */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  HStack,
  PinInput,
  PinInputProps,
} from '@chakra-ui/react';
import React from 'react';

type IProps = {
  label?: string;
  errorMessage?: string;
  labelStyles?: FormLabelProps;
  children: React.ReactNode;
} & PinInputProps;

export const PinInputWrapper: React.FC<IProps> = ({
  label,
  errorMessage,
  labelStyles,
  children,
  ...rest
}) => {
  return (
    <FormControl mx="auto" w="full" isInvalid={!!errorMessage}>
      {label && (
        <FormLabel
          fontWeight="600"
          fontSize="12px"
          lineHeight="20px"
          color="secondary.900"
          {...labelStyles}
        >
          {label}
        </FormLabel>
      )}
      <HStack w="full">
        <PinInput placeholder="" otp {...rest}>
          {children}
        </PinInput>
      </HStack>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
