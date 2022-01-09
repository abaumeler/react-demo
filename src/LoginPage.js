import { ChakraProvider, theme, Text, Heading, Stack, Center } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const LoginPage = () => (
    <ChakraProvider theme={theme}>
      <Center h="100vh" bg="blue.200">
        <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
          <img src="reshot-icon-food-equipment.svg" maxW="70px" mb="8" mx="auto" />
          <Heading as="h1">Log in.</Heading>
          <Text fontsize="lg" color="gray.600">Please log in</Text>
        </Stack>
      </Center>
    </ChakraProvider>
)

export default LoginPage;