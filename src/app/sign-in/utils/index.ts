import * as yup from 'yup';

export interface ISignIn {
  matricNo: number;
  password: string;
}

export const SignInSchema = yup.object().shape({
  matricNo: yup.number().required('Matric Number is required'),
  password: yup.string().required('Password is required'),
});
