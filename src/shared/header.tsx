import {
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const userID = localStorage.getItem("userId");
  const userId = userID?.toString();
  const [identity, setIdentity] = useState(null);

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    axios.get("/api/v1/users/identity/" + userId).then((res) => {
      setIdentity(res.data);
      console.log(identity);
    });
  });

  const userData = {
    name: "Aziz Mahfoudh",
    balance: "200.5",
    currency: "USD",
    total: "55.9",
  };

  return (
    <Flex
      bg="placeholder-color"
      w="lg"
      paddingBlock="20px"
      paddingInline="25px"
      borderTopRadius="14px">
      <HStack>
        <Text>Welcome</Text>
        <Text color="primary.600" fontWeight="600">
          {identity}
        </Text>
      </HStack>
    </Flex>
  );
};

export default Header;
