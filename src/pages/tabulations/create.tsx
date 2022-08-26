import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useStyle } from "../../hooks/useStyle";
import { TabulationBox } from "../../components/TabulationBox";

export default function Create() {
  const theme = useStyle();
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
