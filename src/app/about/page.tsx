'use client';

import { Link, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <>
      <Link href="/about" color="blue.400" _hover={{ color: 'blue.500' }}>
        <Text textAlign="center">About</Text>
      </Link>
      <Text color="red" textAlign="center">
        This is the about page. My Name is Paul King and I like sweet beans
      </Text>
    </>
  );
}
