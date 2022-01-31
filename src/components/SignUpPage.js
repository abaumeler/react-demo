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
  import { ColorModeSwitcher } from './ColorModeSwitcher';
  import { Formik, Form, Field } from 'formik';
  
  
  function SignUpPage() {
    const bg = useColorModeValue('gray.100', 'gray.900')
    const logo = useColorModeValue('./reshot-icon-food-equipment_light.png', './reshot-icon-food-equipment_dark.png')
  
    function validateFirstName(value) {
      let error
      if (!value) {
        error = 'First Name is required'
      }
      return error
    }

    function validateLastName(value) {
      let error
      if (!value) {
        error ='Last Name is required'
      }
      return error
    }
    
    
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
          <Heading as="h1">Hello!</Heading>
          <Text fontSize="lg">Sign up for FoodPlanner</Text>
          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
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
                <Field name='firstname' validate={validateFirstName}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.firstname && form.touched.firstname}>
                      <FormLabel htmlFor='firstname'>First Name</FormLabel>
                      <Input {...field} id='firstname' placeholder='first name' />
                      <FormErrorMessage>{form.errors.firstname}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='lastname' validate={validateLastName}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.lastname && form.touched.lastname}>
                      <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                      <Input {...field} id='lastname' placeholder='last Name' />
                      <FormErrorMessage>{form.errors.lastname}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email' validate={validateEmail}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor='name'>E-Mail</FormLabel>
                      <Input {...field} id='email' placeholder='e-mail' />
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
                <Field name='password' validate={validatePassword}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.passwordconf && form.touched.passwordconf}>
                      <FormLabel htmlFor='passwordconf'>Confirm Password</FormLabel>
                      <Input {...field} id='passwordconf' placeholder='confirm password' type='password' />
                      <FormErrorMessage>{form.errors.passwordconf}</FormErrorMessage>
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