'use client';

import { Flex, Text, Link, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../public/logo.png';
import { Routes } from '../../routes';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const links = [
    {
      title: 'Home',
      path: Routes.HOME,
    },
    {
      title: 'About',
      path: Routes.ABOUT,
    },
    {
      title: 'Staff list',
      path: Routes.STAFF_LIST,
    },
    {
      title: 'Forum',
      path: Routes.FORUM,
    },
    {
      title: 'Contact',
      path: Routes.CONTACT,
    },
  ];

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
        {links.map(link => (
          <Flex
            onClick={() => {
              console.log('activetab', activeTab);
              setActiveTab(link.title);
            }}
            key={link.title}
          >
            <Link
              href={link.path}
              // color="white"
              _hover={{ color: 'primary.200' }}
            >
              <Text
                style={{
                  color: activeTab === link.title ? 'primary.200' : 'white',
                }}
                textAlign="center"
                fontWeight="bold"
              >
                {link.title}
              </Text>
            </Link>
          </Flex>
        ))}
      </Flex>
      <Link href={Routes.SIGNIN}>
        <Button px="40px" variant="primary">
          Login
        </Button>
      </Link>
    </Flex>
  );
}
