import {  Text, 
          Button, 
          Input,
          Heading, 
          Stack, 
          Center,
          FormControl,
          FormLabel,
          useColorModeValue  } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';


function LoginPage(){
  const bg =  useColorModeValue('gray.100', 'gray.900')
  const logo = useColorModeValue('reshot-icon-food-equipment_light.png', 'reshot-icon-food-equipment_dark.png')

  return (
      <Center h="100vh">
        <Stack boxShadow="2xl" p="20" rounded="md" bg={bg}>
          <img src={logo} maxW="20px" mb="10" mx="auto" alt="logo"/>
          <Heading as="h1">Log in.</Heading>
          <Text fontsize="lg">Please log in to access FoodPlanner</Text>
          <FormControl isRequired>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input id='email' type='email' placeholder='E-Mail' />
            <FormLabel htmlFor='email'>Password</FormLabel>
            <Input id='password' type='password' placeholder='Password' />
          </FormControl>
          <Button type="submit" width="full" mt={4}>
            Sign In
          </Button>       
          <Stack justify="center" spacing="3">
            <Text as="div" textAlign="center">
              <span>Don&lsquo;t have an account? </span><Button variant="link">Sign Up</Button>
            </Text>
            <Button variant="link">Forgot password?</Button>
          </Stack>
          <ColorModeSwitcher></ColorModeSwitcher>
        </Stack>
      </Center>
  );
}
export default LoginPage;