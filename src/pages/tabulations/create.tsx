import { Box, Button, ChakraProvider, Flex, Icon, Spacer, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Divider, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiDownload2Line } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Subgroups } from "../../components/Subgroups";
import { StyleHook } from "../../hooks/StyleHook";
import mockTabulation from "./mock/tabulation.json";

type ItemSubgroups = {
  item: string;
}

type ContentType = {
  item: string;
  subgroup: ItemSubgroups[];
}

type NewContentType = {
  content: ContentType[];
}

// Create Tabulations*** 
export default function Create() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = StyleHook();
  const [newContent, setNewContent] = useState<NewContentType>({ content: [] });

  useEffect(() => {
    const constentStringify = JSON.stringify(mockTabulation.content);

    setNewContent({ content: JSON.parse(constentStringify) });
  }, [])

  return (
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

            <Flex
              mb="5"
            >
              <Box
                mr="3"
                ml="2.4"
              >
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  cursor="pointer"
                  leftIcon={<Icon as={RiDownload2Line} fontSize="20" />}
                >
                  Importar
                </Button>
              </Box>

              <Box
                mr="3"
              >
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  cursor="pointer"
                  onClick={onOpen}
                >
                  Adicionar Tipo
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      Text
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>

              <Box
                mr="3"
              >
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  cursor="pointer"
                >
                  Adicionar Item
                </Button>
              </Box>

              <Spacer>

              </Spacer>

              <Box
                mr="3">
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  colorScheme="pink"
                  cursor="pointer"
                >
                  Criar JSON
                </Button>
              </Box>

            </Flex>

            <Flex
              maxWidth={1120}
            >

              <Box
                m="5px"
                borderRadius="15px"
                width="30%"
              >
                <Text p="8px" color="gray.500" fontSize={["10px", "12px", "16px"]} textAlign="center" fontWeight="bold">TIPO</Text>
              </Box>
              <Box
                flexDirection="row"
                width="70%"
                m="5px"
                borderRadius="15px"
              >
                <Text p="8px" color="gray.500" fontSize={["10px", "12px", "16px"]} textAlign="center" fontWeight="bold">ITEM</Text>
              </Box>

            </Flex>

            {newContent.content.map((content) => {
              return (
                <Flex
                  key={content.item}
                  maxWidth={1120}
                >

                  <Box
                    bg="gray.700"
                    m="5px"
                    borderRadius="5px"
                    width="30%"
                  >
                    <Text p="8px" color="white" fontSize={["10px", "12px", "14px"]} textAlign="center">{content.item}</Text>
                  </Box>

                  <Box
                    flexDirection="row"
                    width="70%">
                    <Subgroups subgroup={content.subgroup} />
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