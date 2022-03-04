import {
    Text,
    Button,
    Input,
    Heading,
    Stack,
    Center,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';
  import { ColorModeSwitcher } from './ColorModeSwitcher';
  import { useNavigate } from 'react-router-dom'
  import { Formik, Form, Field } from 'formik';
  import * as Yup from 'yup';
  import { register } from '../services/authService'
  
  
  function SignUpPage() {
    const bg = useColorModeValue('gray.100', 'gray.900');
    const logo = useColorModeValue('./reshot-icon-food-equipment_light.png', './reshot-icon-food-equipment_dark.png');
    const navigate = useNavigate();
    const toast = useToast();
  
    const validate = Yup.object({
      firstName: Yup.string()
       .min(3, 'Must be at least 3 characters')
       .max(15, 'Must be 15 characters or less')
       .required('Firstname is required'),
      lastName: Yup.string()
       .min(3, 'Must be at least 3 characters')
       .max(15, 'Must be 15 characters or less')
       .required('Lastname is required'),
      email: Yup.string()
       .email('Email is invalid')
       .required('Email is required'),
      password: Yup.string()
       .min(6, 'Password must be at least 6 characters')
       .required('Password is required'),
      confirmPassword: Yup.string()
       .oneOf([Yup.ref('password'), null], 'Password must match')
       .required('Please enter password again'),
    });

    const handleOnSubmit = async (values, actions) => {
      try {
        register(values);
        actions.setSubmitting(false);
        actions.resetForm();
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        navigate("/login");
      } catch (error) {
        actions.setSubmitting(false);
        console.error(error);
      }
    }

    return (
      <Center h="100vh">
        <Stack boxShadow="2xl" p="20" rounded="md" bg={bg}>
          <img src={logo} maxw="20px" mb="10" mx="auto" alt="logo" />
          <Heading as="h1">Hello!</Heading>
          <Text fontSize="lg">Sign up for FoodPlanner</Text>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: ''
            }}
            validationSchema={validate}
            onSubmit={handleOnSubmit}
          >
            {(props) => (
              <Form>
                <Field name='firstName'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                      <FormLabel htmlFor='firstName'>First Name</FormLabel>
                      <Input {...field} id='firstName' placeholder='first name' />
                      <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='lastName'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                      <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                      <Input {...field} id='lastName' placeholder='last Name' />
                      <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor='email'>E-Mail</FormLabel>
                      <Input {...field} id='email' placeholder='e-mail' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='password'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <FormLabel htmlFor='password'>Password</FormLabel>
                      <Input {...field} id='password' placeholder='password' type='password' />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='confirmPassword'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                      <FormLabel htmlFor='confirmPassword'>Password</FormLabel>
                      <Input {...field} id='confirmPassword' placeholder='password' type='password' />
                      <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  width="full"
                  isLoading={props.isSubmitting}
                  type='submit'
                >
                  Sign Up!
                </Button>
              </Form>
            )}
          </Formik>
          <Stack justify="center" spacing="3">
            <Button variant="link">Forgot password?</Button>
          </Stack>
          <ColorModeSwitcher></ColorModeSwitcher>
        </Stack>
      </Center>
    );
  }
  export default SignUpPage;