import {
  Card,
  CardBody,
  Flex,
  HStack,
  Input,
  InputLeftAddon,
  InputGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Box,
  Center,
  CloseButton,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  onClick: () => void;
}

const Field = ({ onClick }: Props) => {
  return (
    <Card boxShadow={0} borderRadius={0} maxW="md" bg="under-header">
      <CardBody>
        <HStack>
          <Input
            bg="transparent"
            type="email"
            variant="outline"
            placeholder="E-mail"
            _placeholder={{ opacity: 0.3, color: "inherit" }}></Input>

          <InputGroup>
            <InputLeftAddon>%</InputLeftAddon>
            <NumberInput
              defaultValue={0}
              min={0}
              max={100}
              clampValueOnBlur={false}>
              <NumberInputField inlineSize="100px" borderLeftRadius={0} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>
          <CloseButton
            size="md"
            bg="primary.500"
            color="white"
            onClick={onClick}
          />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Field;
