'use client';

import { Link, Text } from '@chakra-ui/react';

export default function Page() {
  return (
    <>
      <Link href="/about" color="blue.400" _hover={{ color: 'blue.500' }}>
        <Text textAlign="center">About</Text>
      </Link>
      <Text color="red" textAlign="center">
        My Name is Paul King and I cook sweet beans
      </Text>
    </>
  );
}
