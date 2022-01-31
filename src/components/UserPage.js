import {
    Text,
    Center,
    useColorModeValue
  } from '@chakra-ui/react';
import { useState } from 'react';
  
  function UserPage() {
    const bg = useColorModeValue('gray.100', 'gray.900')
    const  [user, setUser] = useState("");

    return (
        <Center h="100vh" bg={bg}>
            <Text>Hello {user}</Text>
        </Center>
    );
  }
  export default UserPage;