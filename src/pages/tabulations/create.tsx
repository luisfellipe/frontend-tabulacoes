import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useStyle } from "../../hooks/useStyle";
import { TabulationBox } from "../../components/TabulationBox";
import { useEditJSONContext } from "../../contexts/EditJSONContext";
import { useEffect } from "react";

export default function Create() {
  const { cleanStatesContext } = useEditJSONContext();
  const theme = useStyle();

  function handleCleanStates() {
    cleanStatesContext();
  }

  useEffect(() => {
    handleCleanStates();
  }, [])

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
