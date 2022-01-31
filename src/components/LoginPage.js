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
  useColorModeValue
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Formik, Form, Field } from 'formik';


function LoginPage() {
  const bg = useColorModeValue('gray.100', 'gray.900')
  const logo = useColorModeValue('./reshot-icon-food-equipment_light.png', './reshot-icon-food-equipment_dark.png')

  function validateEmail(value) {
    let error
    if (!value) {
      error = 'Email is required'
    }
    return error
  }

  function validatePassword(value) {
    let error
    if (!value) {
      error = 'Password is required'
    }
    return error
  }

  return (
    <Center h="100vh">
      <Stack boxShadow="2xl" p="20" rounded="md" bg={bg}>
        <img src={logo} maxw="20px" mb="10" mx="auto" alt="logo" />
        <Heading as="h1">Log in.</Heading>
        <Text fontSize="lg">Please log in to access FoodPlanner</Text>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {(props) => (
            <Form>
              <Field name='email' validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel htmlFor='name'>E-Mail</FormLabel>
                    <Input {...field} id='email' placeholder='email' />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='password' validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input {...field} id='password' placeholder='password' type='password' />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                width="full"
                isLoading={props.isSubmitting}
                type='submit'
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Stack justify="center" spacing="3">
          <Text as="div" textAlign="center">
            <span>Don&lsquo;t have an account? </span><Link to='/signup'><Button variant="link">Sign Up</Button></Link>
          </Text>
          <Button variant="link">Forgot password?</Button>
        </Stack>
        <ColorModeSwitcher></ColorModeSwitcher>
      </Stack>
    </Center>
  );
}
export default LoginPage;