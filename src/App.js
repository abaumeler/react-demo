import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './/components/LoginPage';
import SignUpPage from './/components/SignUpPage';
import UserPage from './/components/UserPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} /> 
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/home" element={<UserPage/>} />
        </Routes>
      </Router>  
    </ChakraProvider>
  );
}

export default App;
