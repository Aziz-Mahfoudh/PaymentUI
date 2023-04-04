import { Card, CardBody, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";

const SingleBody = () => {
  return (
    <Card boxShadow={0} borderRadius={0} maxW="md" bg="under-header">
      <CardBody textAlign="center">
        <Center>
          <HStack>
            <Text>Thank you for choosing </Text>
            <Text fontWeight="700">WePay</Text>
          </HStack>
        </Center>
      </CardBody>
    </Card>
  );
};

export default SingleBody;
