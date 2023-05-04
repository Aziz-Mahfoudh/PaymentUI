import React, { useEffect, useState } from "react";
import Body from "../shared/body";
import Header from "../shared/header";
import Info from "../shared/info";
import { Center, Container, VStack } from "@chakra-ui/react";
import AlertPayment from "../component/payment-confirmation";

const Checkout = () => {
  return (
    <Container>
      <Center paddingTop={20}>
        <VStack spacing="0">
          <Header></Header>
          <Info></Info>
          <Body></Body>
        </VStack>
      </Center>
    </Container>
  );
};

export default Checkout;
