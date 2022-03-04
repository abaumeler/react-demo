import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

// https://www.bezkoder.com/react-jwt-auth/

export const login = async (values) => {
    try {
      const response = await axios({
        method: "POST",
        url: API_URL+'/users/login',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: {
          user: {
            email: values.email,
            password: values.password
          }
        }
      });
      if (response.data.user.token) {
        console.log(response.data.user.token)
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export function logout() {
    localStorage.removeItem("user");
}

export const register = async (values, actions) => {
    try {
      console.log(values);
      const response = await axios({
        method: "POST",
        url: API_URL+'/users/register',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: {
          user: {
            email: values.email,
            password: values.password,
            name: values.firstName
          }
        }
      });
      console.log(response); 
    } catch (error) {
      console.error(error);
    };
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
}

