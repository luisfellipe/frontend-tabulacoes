import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Icon,
  Img,
  Input,
  Text
} from "@chakra-ui/react";
import { RiAddLine, RiDownload2Line, RiEditBoxFill } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Subgroups } from "../../components/Subgroups";
import { StyleHook } from "../../hooks/StyleHook";

import notFound from "../../assets/images/not-found.svg";
import mockTabulation from "./mock/tabulation.json";

type ItemSubgroups = {
  id: string;
  item: string;
};

type ContentType = {
  item: string;
  subgroup: ItemSubgroups[];
};

export default function Create() {
  const theme = StyleHook();
  const [newContent, setNewContent] = useState<ContentType[]>([]);
  console.log(newContent);
  function handleImportNewContent() {
    const contentStringify = JSON.stringify(mockTabulation.content);
    const parseContent = JSON.parse(contentStringify);
    setNewContent([...parseContent]);
  }

  function handleInitNewContent() {
    const newCreatedContent = [];
    newCreatedContent.push({
      item: "-",
      subgroup: [{ id: uuidv4(), item: "-" }]
    });
    setNewContent([...newCreatedContent]);
  }

  function handleRemoveGroup(index: number) {
    const content = newContent;
    content.splice(index, 1);
    setNewContent([...content]);
  }

  function handleAddGroup(index: number) {
    const content = newContent;
    content.splice(index + 1, 0, {
      item: "-",
      subgroup: [{ id: uuidv4(), item: "-" }]
    });
    setNewContent([...content]);
  }

  const contentIsEmpty = newContent.length === 0;

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
                    background: "colorBackground.importButtonHover"
                  }}
                  transition="0.2s"
                  onClick={handleImportNewContent}
                >
                  Importar
                </Button>
              </Box>

              <Box mr="3">
                {contentIsEmpty && (
                  <Button
                    as="a"
                    size="sm"
                    fontSize="small"
                    bg="colorBackground.createJsonButton"
                    cursor="pointer"
                    leftIcon={<Icon as={RiEditBoxFill} fontSize="20" />}
                    _hover={{
                      background: "colorBackground.createJsonButtonHover"
                    }}
                    transition="0.2s"
                    onClick={handleInitNewContent}
                  >
                    Criar JSON
                  </Button>
                )}
              </Box>
            </Flex>

            {!contentIsEmpty && (
              <Flex maxWidth={1120}>
                <Box m="5px" borderRadius="15px" width={["50%", "30%"]}>
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
                <Box
                  flexDirection="row"
                  width={["50%", "70%"]}
                  m="5px"
                  borderRadius="15px"
                >
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
            )}
            {contentIsEmpty ? (
              <Flex
                color="colorText.textTable"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
              >
                <Img
                  src={notFound.src}
                  alt="Not found"
                  width="70px"
                  mt="25px"
                  style={{
                    filter: "invert(60%)"
                  }}
                />
                <Text fontSize={25} mt={6}>
                  Nenhum dado encontrado...
                </Text>
                <Text fontSize={16} mt={2}>
                  Para iniciar a criação de um novo content basta clicar em
                  Criar JSON ou importar um arquivo JSON
                </Text>
              </Flex>
            ) : (
              newContent.map((content, index) => {
                return (
                  <Flex key={index} maxWidth={1120}>
                    <Flex
                      bg="colorBackground.typeAndItem"
                      m="5px"
                      borderRadius="5px"
                      width={["50%", "30%"]}
                      justifyContent="space-between"
                    >
                      <Input
                        p="12px"
                        color="colorText.textTable"
                        variant="unstyled"
                        fontSize={["10px", "12px", "14px"]}
                        textAlign="center"
                        defaultValue={content.item}
                      ></Input>

                      <Flex alignItems="end" mb="12px" mr="8px">
                        <Icon
                          as={BiTrash}
                          color="colorText.iconText"
                          fontSize={["0.7rem", "1.2rem"]}
                          borderRadius="4px"
                          cursor="pointer"
                          textColor="colorText.deleteButton"
                          mr="8px"
                          _hover={{
                            color: "colorText.deleteButtonHover"
                          }}
                          transition="0.2s"
                          onClick={() => handleRemoveGroup(index)}
                        ></Icon>

                        <Icon
                          as={RiAddLine}
                          color="colorText.addButtonColor"
                          fontSize={["0.7rem", "1.2rem"]}
                          borderRadius="4px"
                          cursor="pointer"
                          textColor="colorText.addButton"
                          _hover={{
                            color: "colorText.addButtonHover",
                            background: "colorBackground.addButtonHover"
                          }}
                          transition="0.2s"
                          onClick={() => handleAddGroup(index)}
                        ></Icon>
                      </Flex>
                    </Flex>

                    <Box flexDirection="row" width={["50%", "70%"]}>
                      <Subgroups subgroup={content.subgroup} />
                    </Box>
                  </Flex>
                );
              })
            )}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
