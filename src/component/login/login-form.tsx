import {
  Heading,
  Text,
  Box,
  Stack,
  Center,
  Button,
  Flex,
  Input,
  VStack,
  Spacer,
  AbsoluteCenter,
  FormControl,
  HStack,
} from "@chakra-ui/react";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import PasswordInput from "../../shared/password-input";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("*Invalid email").required("*No email provided."),
    password: Yup.string().required("*No Password provided."),
  });

  const navigate = useNavigate();

  return (
    <Box maxW="24rem">
      <Center>
        <HStack>
          <Text color="text-header" fontSize="3xl">
            Log in to
          </Text>
          <Text color="text-header" fontSize="3xl" fontWeight="bold">
            WePay
          </Text>
        </HStack>
      </Center>
      <Box h={8}></Box>
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          axios.post('/api/v1/auth/authenticate', values)
          .then(res =>{
            //console.log(JSON.stringify(values, null, 2))
            console.log(res);
            const token = res.data.access_token;
            const userId = res.data.id;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            navigate('/checkout');

          }
          )
          resetForm();
        }}>
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Stack spacing={4}>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  variant="filled"
                  size="lg"
                  focusBorderColor="primary.600"
                  placeholder="Email"
                  _placeholder={{ opacity: 0.3, color: "inherit" }}
                />
                {errors.email && touched.email ? (
                  <Text color="red">{errors.email}</Text>
                ) : null}
                <Field
                  as={PasswordInput}
                  id="password"
                  name="password"
                  variant="filled"
                  focusBorderColor="primary.600"
                  placeholder="Password"
                  _placeholder={{
                    opacity: 0.3,
                    color: "inherit",
                  }}></Field>
                {errors.password && touched.password ? (
                  <Text color="red">{errors.password}</Text>
                ) : null}
                <VStack>
                  <Button
                    type="submit"
                    mt={4}
                    mb={6}
                    size="lg"
                    colorScheme="primary"
                    w="100%">
                    Save
                  </Button>
                  <Button variant="link" colorScheme="primary">
                    Forgot Password?
                  </Button>
                  <HStack>
                    <Text>Don't have an account yet?</Text>
                    <Button variant="link" colorScheme="primary">
                      Register!
                    </Button>
                  </HStack>
                  <Box h={6}></Box>
                  <Button variant="link" color="primary.600" fontWeight="400">
                    Delete payment and return.
                  </Button>
                </VStack>
              </Stack>
            </FormControl>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
