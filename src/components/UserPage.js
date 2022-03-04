import {
  Text,
  Center,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Receipe from './Receipe';
const API_URL = process.env.REACT_APP_API_URL;

function UserPage() {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const navigate = useNavigate();
  let [userData, setUserData] = useState("");
  
  //runs whenever 'navigate' changes
  React.useEffect(() => {
    const getUserData = async () => {
      // check if an user object is present in local storage
      if(localStorage.getItem("user")){
        // there is an user object present, try to use the token from it 
        // to fetch the userdata from the backend
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
      }else{
        // there is no user object present, redirect user to the login page
        navigate("/login");
      }
    }   
    getUserData();
  }, [navigate]);

  return (
    <Center h="100vh">
      <Stack>
        <Text>Hello {userData.name}!</Text>
        <Receipe></Receipe> 
        <ColorModeSwitcher></ColorModeSwitcher>
      </Stack> 
    </Center>
  );
}
export default UserPage;