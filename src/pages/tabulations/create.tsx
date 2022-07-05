import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiDownload2Line, RiEditBoxFill } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Subgroups } from "../../components/Subgroups";
import { StyleHook } from "../../hooks/StyleHook";

import mockTabulation from "./mock/tabulation.json";

type ItemSubgroups = {
  item: string;
};

type ContentType = {
  item: string;
  subgroup: ItemSubgroups[];
};

type NewContentType = {
  content: ContentType[];
};

export default function Create() {
  const theme = StyleHook();
  const [newContent, setNewContent] = useState<NewContentType>({ content: [] });

  useEffect(() => {
    const contentStringify = JSON.stringify(mockTabulation.content);

    setNewContent({ content: JSON.parse(contentStringify) });
  }, []);

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
            bg="colorBackground.createTabulationBox"
            p="8"
          >
            <Flex mb="5" justifyContent="space-between" align="center">
              <Box mr="3" ml="2.4">
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  bg="colorBackground.importButton"
                  cursor="pointer"
                  leftIcon={<Icon as={RiDownload2Line} fontSize="20" />}
                  _hover={{
                    background: "colorBackground.importButtonHover",
                  }}
                  transition="0.2s"
                >
                  Importar
                </Button>
              </Box>

              <Box mr="3">
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  bg="colorBackground.createJsonButton"
                  cursor="pointer"
                  leftIcon={<Icon as={RiEditBoxFill} fontSize="20" />}
                  _hover={{
                    background: "colorBackground.createJsonButtonHover",
                  }}
                  transition="0.2s"
                >
                  Criar JSON
                </Button>
              </Box>
            </Flex>

            <Flex maxWidth={1120}>
              <Box m="5px" borderRadius="15px" width="30%">
                <Text
                  p="0.5rem"
                  color="colorText.titleTable"
                  fontSize={["12px", "16px", "22px"]}
                  textAlign="left"
                  fontWeight="bold"
                >
                  TIPO
                </Text>
              </Box>
              <Box flexDirection="row" width="70%" m="5px" borderRadius="15px">
                <Text
                  p="8px"
                  color="colorText.titleTable"
                  fontSize={["12px", "16px", "22px"]}
                  textAlign="left"
                  fontWeight="bold"
                >
                  ITEM
                </Text>
              </Box>
            </Flex>

            {newContent.content.map((content) => {
              return (
                <Flex key={content.item} maxWidth={1120}>
                  <Flex
                    bg="colorBackground.typeAndItem"
                    m="5px"
                    borderRadius="5px"
                    width="30%"
                    justifyContent="space-between"
                  >
                    <Text
                      p="12px"
                      color="colorText.textTable"
                      fontSize={["10px", "12px", "14px"]}
                      textAlign="center"
                    >
                      {content.item}
                    </Text>

                    <Flex alignItems="end" mb="12px" mr="8px">
                      <Icon
                        as={BiTrash}
                        color="colorText.iconText"
                        fontSize="1.2rem"
                        borderRadius="4px"
                        cursor="pointer"
                        textColor="colorText.deleteButton"
                        mr="8px"
                        _hover={{
                          color: "colorText.deleteButtonHover",
                        }}
                        transition="0.2s"
                      ></Icon>

                      <Icon
                        as={RiAddLine}
                        color="colorText.addButtonColor"
                        fontSize="1.2rem"
                        borderRadius="4px"
                        cursor="pointer"
                        textColor="colorText.addButton"
                        _hover={{
                          color: "colorText.addButtonHover",
                          background: "colorBackground.addButtonHover",
                        }}
                        transition="0.2s"
                      ></Icon>
                    </Flex>
                  </Flex>

                  <Box flexDirection="row" width="70%">
                    <Subgroups subgroup={content.subgroup} />
                  </Box>
                </Flex>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
