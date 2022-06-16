import { Box, Button, ChakraProvider, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiDownload2Line } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Subgroups } from "../../components/Subgroups";
import { StyleHook } from "../../hooks/StyleHook";
import mockTabulation from "./mock/tabulation.json";

type ContentType = {
  group: string;
  subgroups: string[];
}

type NewContentType = {
  content: ContentType[];
}

// Create Tabulations*** 
export default function Create() {
  const theme = StyleHook();
  const [newContent, setNewContent] = useState<NewContentType>({ content: []});

  useEffect(() => {
    const constentStringify = JSON.stringify(mockTabulation.content);

    setNewContent({ content: JSON.parse(constentStringify) });
  }, [])

  return(
    <ChakraProvider theme={theme}>
      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box
            flex="1"
            minWidth={340}
            borderRadius={8}
            bg="gray.800"
            p="8"
          >
            <Button
              as="a" 
              size="sm" 
              fontSize="small"
              colorScheme="pink"
              cursor="pointer"
              leftIcon={<Icon as={RiDownload2Line}  fontSize="20"/>}
            >
              Importar
            </Button>

            <Text
              mt="15px"
              color="white"
            >Criar JSON</Text>

            { newContent.content.map((content) => {
                return (
                  <Flex 
                    key={content.group}
                    maxWidth={1120}
                  > 
                    <Box 
                      bg="gray.700" 
                      m="5px" 
                      borderRadius="5px" 
                      width="30%"
                    > 
                      <Text p="8px" color="white" fontSize={["10px", "12px", "14px"]} textAlign="center">{content.group}</Text>
                    </Box>
                    
                    <Box flexDirection="row" width="70%">
                      <Subgroups subgroups={content.subgroups} /> 
                    </Box>
                                
                  </Flex>
                )
              })
            }
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}