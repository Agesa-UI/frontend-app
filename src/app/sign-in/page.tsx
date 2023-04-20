/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Text, chakra, Flex, Button, Checkbox } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { InputComponent } from '../../shared/form';
import logo from '../../../public/logo.png';
import eye from '../../../public/eye.svg';
import { ISignIn, SignInSchema } from './utils';
import { Routes } from '../../routes';

export default function SignIn() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    mode: 'onBlur',
    resolver: yupResolver(SignInSchema),
  });

  const handleSignIn: SubmitHandler<ISignIn> = async values => {
    console.log('values', values);
    router.push(Routes.HOME);
  };

  return (
    <>
      <Flex
        w="full"
        minH="100vh"
        backgroundImage={{ base: 'none', md: "url('/bg_signin.png')" }}
        bgSize="cover"
      >
        <Flex
          display={{ base: 'none', md: 'flex' }}
          m="auto"
          alignItems="center"
          justifyContent="center"
          w="50%"
          h="full"
          flexDir="column"
          rowGap="12px"
          color="white"
          fontWeight="bold"
        >
          <Image width="282" height="288" src={logo} alt="logo" />
          <Flex
            textAlign="center"
            flexDir="column"
            rowGap="12px"
            fontSize={{ base: '24px', md: '40px' }}
          >
            <Text>Welcome to</Text>
            <Text display="flex" columnGap="12px">
              <chakra.p color="primary.200">AGESA</chakra.p> Online Course
            </Text>
          </Flex>
        </Flex>
        <Flex w="50%" rowGap="12px" fontSize={{ base: '24px', md: '40px' }}>
          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            w="80%"
            mx="auto"
            fontWeight="bold"
          >
            <Text>Welcome to</Text>
            <Text display="flex" columnGap="12px">
              <chakra.p color="primary.100">AGESA</chakra.p> Online Course
            </Text>
            <Flex
              px={{ base: '1.5rem', sm: 0 }}
              direction="column"
              pt="20px"
              gap="4"
              alignItems="flex-start"
              w="100%"
            >
              <InputComponent
                {...register('matricNo')}
                label="Matric Number"
                errorMessage={errors.matricNo && errors.matricNo.message}
                placeholder="Matric Number"
                w="full"
              />
              <InputComponent
                {...register('password')}
                label="Password"
                errorMessage={errors.password && errors.password.message}
                type={show ? 'text' : 'password'}
                placeholder="Password"
                w="full"
                symbol={eye}
                symFunction={handleClick}
              />
              <Flex
                direction="column"
                gap="2"
                mt="40px"
                w="full"
                color="primary.100"
              >
                <Flex justifyContent="space-between">
                  <Checkbox size="lg" colorScheme="green" w="full">
                    <chakra.span fontSize="14px" fontWeight="500">
                      Remember me
                    </chakra.span>
                  </Checkbox>
                  <NextLink passHref href={Routes.SIGNIN}>
                    <chakra.a
                      fontSize="14px"
                      whiteSpace="nowrap"
                      fontWeight="bold"
                      display="flex"
                      alignItems="end"
                    >
                      Forgotten your password
                    </chakra.a>
                  </NextLink>
                </Flex>
                <Button
                  fontSize="18px"
                  // isLoading={isSubmitting}
                  type="submit"
                  onClick={handleSubmit(handleSignIn)}
                  // isLoading={mutation.isLoading}
                  variant="secondary"
                  w="full"
                >
                  Log in
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
