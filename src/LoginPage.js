import {  ChakraProvider, 
          theme, 
          Text, 
          Button, 
          Input,
          Heading, 
          Stack, 
          Center,
          FormControl,
          FormLabel,
          FormHelperText } from '@chakra-ui/react';
import { useState } from "react";
import { ColorModeSwitcher } from './ColorModeSwitcher';

function LoginPage(){

  function LoginForm(){
    const[name, SetName] = useState();
  }

  return (
    <ChakraProvider theme={theme}>
      <Center h="100vh" bg="blue.200">
        <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
          <img src="reshot-icon-food-equipment.svg" maxW="20px" mb="10" mx="auto" />
          <Heading as="h1">Log in.</Heading>
          <Text fontsize="lg" color="gray.600">Please log in to access FoodPlanner</Text>
          <FormControl isRequired>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' placeholder='E-Mail' />
            <FormLabel htmlFor='email'>Password</FormLabel>
            <Input id='password' type='password' placeholder='Password' />
          </FormControl>
          
          <Stack justify="center" color="gray.600" spacing="3">
            <Text as="div" textAlign="center">
              <span>Don&lsquo;t have an account? </span><Button colorScheme="blue" variant="link">Sign Up</Button>
            </Text>
            <Button colorScheme="blue" variant="link">Forgot password?</Button>
          </Stack>
        </Stack>
      </Center>
    </ChakraProvider>
  );
}
export default LoginPage;