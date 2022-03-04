import {
  Text,
  Center,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

function UserPage() {
  const bg = useColorModeValue('gray.100', 'gray.900')
  let [userData, setUserData] = useState("");

  React.useEffect(() => {
    //runs only on the first render
    const getUserData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user")).user.token;
        const response = await axios({
          method: "GET",
          url: API_URL + '/user',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            authorization: 'Bearer ' + token
          }
        });
        if (response.data.user.token) {
          console.log("response: " + response.data)
          localStorage.setItem("user", JSON.stringify(response.data));
          setUserData(response.data.user);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUserData();
  }, []);

  return (
    <Center h="100vh" bg={bg}>
      <Text>Hello {userData.name}</Text>
    </Center>
  );
}
export default UserPage;