import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Field from "./field";
import { MdAdd } from "react-icons/md";

import SingleBody from "./single-body";
import { string } from "yup";

const Body = () => {
  const [fields, setFields] = useState([{ id: 1, email: "", percentage: "" }]);

  const addField = () => {
    let _fields = [...fields];
    _fields.push({ id: _fields.length + 1, email: "", percentage: "" });
    setFields(_fields);
  };

  const removeField = (id: number) => {
    let _fields = [...fields];
    _fields = _fields.filter((field) => field.id !== id);
    setFields(_fields);
    console.log("removed");
  };

  return (
    <Flex w="lg" paddingBlock="20px" paddingInline="25px">
      <VStack>
        <Tabs variant="solid-rounded" colorScheme="primary">
          <TabList>
            <Tab>Single</Tab>
            <Tab>Split</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SingleBody></SingleBody>
              <Center>
                <Button
                  variant="solid"
                  colorScheme="primary"
                  w="md"
                  borderTopRadius="0px">
                  Complete
                </Button>
              </Center>
            </TabPanel>
            <TabPanel>
              {fields.map((field, index) => (
                <Field onClick={() => removeField(field.id)} key={field.id} />
              ))}
              <Box h="20px"></Box>
              <Center>
                <VStack width="md">
                  <IconButton
                    onClick={addField}
                    border="2px"
                    variant="outline"
                    aria-label="Plus"
                    colorScheme="primary"
                    size="sm"
                    icon={<MdAdd color="primary.500" size="16px" />}
                  />
                  <Box h="10px"></Box>
                  <Button
                    variant="solid"
                    colorScheme="primary"
                    w="md"
                    borderTopRadius="0px">
                    Complete
                  </Button>
                </VStack>
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Center>
          <Button variant="link" color="primary.600" fontWeight="400">
            Delete payment and return.
          </Button>
        </Center>
      </VStack>
    </Flex>
  );
};

export default Body;
