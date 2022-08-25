import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { StyleHook } from "../../hooks/StyleHook";
import { TabulationBox } from "../../components/TabulationBox";

export default function Create() {
  const theme = StyleHook();
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
          <TabulationBox />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
