import {
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Header = () => {
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
          {userData.name}
        </Text>
      </HStack>
    </Flex>
  );
};

export default Header;
