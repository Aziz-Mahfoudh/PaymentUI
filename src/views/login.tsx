import React from "react";
import LoginForm from "../component/login/login-form";
import { Center, Container, Flex } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}>
      <Center>
        <LoginForm></LoginForm>
      </Center>
    </Flex>
  );
};

export default Login;
