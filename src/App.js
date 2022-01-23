import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import LoginPage from './LoginPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginPage/>   
    </ChakraProvider>
  );
}

export default App;
