'use client';

import React from 'react';
// import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../chakra';
import Navbar from './components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* <CacheProvider> */}
        <ChakraProvider theme={theme}>
          <Navbar />
          {children}
        </ChakraProvider>
        {/* </CacheProvider> */}
      </body>
    </html>
  );
}
