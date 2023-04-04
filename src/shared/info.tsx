import {
  Divider,
  Flex,
  HStack,
  Heading,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Info = () => {
  const userData = {
    name: "Aziz Mahfoudh",
    balance: "200.5",
    currency: "USD",
    total: "55.9",
  };

  return (
    <Flex bg="under-header" w="lg" paddingBlock="20px" paddingInline="25px">
      <Stat>
        <StatLabel color="primary.500" fontWeight="bold">
          Balance
        </StatLabel>
        <StatNumber fontSize="lg">
          {userData.balance} {userData.currency}
        </StatNumber>
      </Stat>
      <Spacer />

      <Stat>
        <StatLabel color="primary.500" fontWeight="bold">
          Total
        </StatLabel>
        <StatNumber fontSize="lg">
          {userData.total} {userData.currency}
        </StatNumber>
      </Stat>
    </Flex>
  );
};

export default Info;
