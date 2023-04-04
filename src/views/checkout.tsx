import React from "react";
import Body from "../shared/body";
import Header from "../shared/header";
import Info from "../shared/info";
import { Center, VStack } from "@chakra-ui/react";

const Checkout = () => {
  return (
    <Center paddingTop={20}>
      <VStack spacing="0">
        <Header></Header>
        <Info></Info>
        <Body></Body>
      </VStack>
    </Center>
  );
};

export default Checkout;
