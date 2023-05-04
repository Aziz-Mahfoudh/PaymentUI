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
import { Cookies } from "react-cookie";
import { instanceOf } from 'prop-types';
import { useCookies } from 'react-cookie';



const Info = () => {


  const [balance, setBalance] = useState(null)
  const [price, setPrice] = useState(null)
  const [currency, setCurrency] = useState(null)

  const token = localStorage.getItem('token')
  const userID = localStorage.getItem('userId');
  const userId = userID?.toString();
  
  const [cookie] = useCookies(["paymentID"])
  const paymentID = cookie.paymentID;
  const paymentId = paymentID.payment_id;
  console.log(paymentID.payment_id.toString());

 

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


  useEffect(() => {
      axios.get("/api/v1/users/balance/"+userId, {
      })
      .then(res => {
          console.log(res.data)
          setBalance(res.data) 
      }),
      axios.get("/api/v1/payment/informations/"+paymentId)
      .then(res => {
        setPrice(res.data.total),
        setCurrency(res.data.currency)
      }
        )

  },[token, userID, paymentId])


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
          {price} {currency}
        </StatNumber>
      </Stat>
    </Flex>
  );
};

export default Info;
