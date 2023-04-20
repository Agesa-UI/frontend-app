'use client';

import { Flex, Text, Link, Button } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { Routes } from '../../routes';

export default function Navbar() {
  const pathname = usePathname();
  const primary = 'primary.200';

  return (
    <Flex
      bgColor="primary.100"
      maxWidth="1440px"
      mx="auto"
      justifyContent="space-between"
      p="4"
      w="full"
      alignItems="center"
    >
      <Flex width="80px" height="80px">
        <Image src={logo} alt="logo" />
      </Flex>
      <Flex columnGap="48px">
        <Flex>
          <Link href={Routes.HOME} _hover={{ color: primary }}>
            <Text
              textAlign="center"
              fontWeight="bold"
              style={{ color: pathname === '/' ? primary : 'white' }}
            >
              Home
            </Text>
          </Link>
        </Flex>
        <Flex>
          <Link href={Routes.ABOUT} _hover={{ color: primary }}>
            <Text
              textAlign="center"
              fontWeight="bold"
              style={{ color: pathname === '/about' ? primary : 'white' }}
            >
              About
            </Text>
          </Link>
        </Flex>
        <Flex>
          <Link href={Routes.STAFF_LIST} _hover={{ color: primary }}>
            <Text
              textAlign="center"
              fontWeight="bold"
              style={{ color: pathname === '/staff-list' ? primary : 'white' }}
            >
              Staff list
            </Text>
          </Link>
        </Flex>
        <Flex>
          <Link href={Routes.FORUM} _hover={{ color: primary }}>
            <Text
              textAlign="center"
              fontWeight="bold"
              style={{ color: pathname === '/forum' ? primary : 'white' }}
            >
              Forum
            </Text>
          </Link>
        </Flex>
        <Flex>
          <Link href={Routes.CONTACT} _hover={{ color: primary }}>
            <Text
              textAlign="center"
              fontWeight="bold"
              style={{ color: pathname === '/contact' ? primary : 'white' }}
            >
              Contact
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Link href={Routes.SIGNIN}>
        <Button px="40px" variant="primary">
          Login
        </Button>
      </Link>
    </Flex>
  );
}
