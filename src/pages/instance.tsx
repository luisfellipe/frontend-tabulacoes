import { ChakraProvider, Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useStyle } from "../hooks/useStyle";
export default function Instance() {
  const theme = useStyle();

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <h1>Instancia</h1>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
