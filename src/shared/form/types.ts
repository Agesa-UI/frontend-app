/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormLabelProps,
  InputProps,
  RadioGroupProps,
  RadioProps,
  SelectProps,
} from '@chakra-ui/react';

export interface IInputProps extends InputProps {
  label?: string;
  labelStyles?: FormLabelProps;
  errorMessage?: string;
  symbol?: any;
  symFunction?: any;
}

export interface ISelectComponent<TValue extends number | string>
  extends SelectProps,
    Pick<IInputProps, 'label' | 'labelStyles' | 'errorMessage'> {
  options: Array<{ value: TValue; label: string }>;
}

export interface IRadio<T extends string | undefined>
  extends RadioProps,
    Pick<IInputProps, 'label' | 'labelStyles' | 'errorMessage'> {
  RadioGroupProps?: RadioGroupProps;
  options: Array<{ value: T; label: string }>;
}
