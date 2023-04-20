'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
// import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../chakra';
import Navbar from './components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head />
      <body>
        {/* <CacheProvider> */}
        <ChakraProvider theme={theme}>
          {pathname !== '/sign-in' && <Navbar />}
          {children}
        </ChakraProvider>
        {/* </CacheProvider> */}
      </body>
    </html>
  );
}
