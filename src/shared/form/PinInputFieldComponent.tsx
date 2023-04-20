import { PinInputField, PinInputFieldProps } from '@chakra-ui/react';

type IProps = PinInputFieldProps;

export const PinInputFieldComponent = ({ ...rest }: IProps) => {
  return (
    <PinInputField
      _hover={{
        borderColor: 'gray.200 !important',
      }}
      borderColor="#111111 !important"
      {...rest}
    />
  );
};
