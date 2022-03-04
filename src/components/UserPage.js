import {
    Text,
    Center,
    useColorModeValue
  } from '@chakra-ui/react';
import { useState } from 'react';
import axios from "axios";
  
  function getUserData() {
    console.log(localStorage.getItem("user").token);
    try {
      const response = await axios({
        method: "GET",
        url: API_URL+'/user',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          authorization: 'Bearer ' + localStorage.getItem("user").token
        }
      });
      if (response.data.user.token) {
        console.log(response.data)
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


  function UserPage() {
    const bg = useColorModeValue('gray.100', 'gray.900')
    const  [user, setUser] = useState("");

    setUser = getUserData();

    return (
        <Center h="100vh" bg={bg}>
            <Text>Hello {user}</Text>
        </Center>
    );
  }
  export default UserPage;