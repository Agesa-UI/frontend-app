import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  chakra,
} from '@chakra-ui/react';
import { ForwardedRef, forwardRef } from 'react';
import { ISelectComponent } from './types';

function SelectComponentWrapper<TValue extends number | string>(
  {
    label,
    errorMessage,
    labelStyles,
    options,
    ...rest
  }: ISelectComponent<TValue>,
  ref: ForwardedRef<HTMLSelectElement>
) {
  const { id } = rest;

  return (
    <FormControl isInvalid={!!errorMessage}>
      {label && (
        <FormLabel
          fontWeight="600"
          fontSize="12px"
          lineHeight="20px"
          color="secondary.900"
          htmlFor={id}
          {...labelStyles}
        >
          {label}
        </FormLabel>
      )}
      <Select ref={ref} {...rest}>
        {options.map(option => {
          return (
            <chakra.option value={option.value} key={Math.random()}>
              {option.label}
            </chakra.option>
          );
        })}
      </Select>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export const SelectComponent = forwardRef(SelectComponentWrapper);
