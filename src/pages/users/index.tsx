import { ChakraProvider, Flex } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { StyleHook } from "../../hooks/StyleHook";

export default function Users() {
  const theme = StyleHook();

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <h1>Usuários</h1>
          
        </Flex>
      </Flex> 
    </ChakraProvider>
  );
}