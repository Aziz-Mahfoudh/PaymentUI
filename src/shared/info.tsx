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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {


  const [balance, setBalance] = useState(null)
  const token = localStorage.getItem('token')
  const userID = localStorage.getItem('userId');
  const userId = userID?.toString();
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


  useEffect(() => {
      axios.get("/api/v1/users/balance/"+userId, {
      })
      .then(res => {
          console.log(res.data)
          setBalance(res.data) 
      })

  },[token, userID])


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
          {balance} TND
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
