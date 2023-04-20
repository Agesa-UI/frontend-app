import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  chakra,
} from '@chakra-ui/react';
import { ForwardedRef, forwardRef } from 'react';
import { IRadio } from './types';

function RadioComponentWrapper<T extends string | undefined>(
  { options, label, labelStyles, ...rest }: IRadio<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <FormControl>
      <FormLabel fontWeight="600" color="#000" fontSize="12px" {...labelStyles}>
        {label}
      </FormLabel>
      <RadioGroup>
        <HStack>
          {options.map(option => (
            <Radio
              ref={ref}
              fontSize="15px"
              colorScheme="primary"
              value={option.value}
              key={Math.random()}
              {...rest}
            >
              <chakra.span fontSize="12px"> {option.label}</chakra.span>
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </FormControl>
  );
}

export const RadioComponent = forwardRef(RadioComponentWrapper);
