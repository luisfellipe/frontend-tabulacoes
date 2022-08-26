import {
  ChakraProvider,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from "@chakra-ui/react";

import NextLink from "next/link";

import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useTabulations } from "../../hooks/useTabulations";
import { queryClient } from "../../services/queryClient";
import { StyleHook } from "../../hooks/StyleHook";

export default function Tabulations() {
  const theme = StyleHook();
  const [page, setPage] = useState(1);
  // 'data' vai receber o tabulations
  const { data, isLoading, isFetching, error } = useTabulations(page);

  const isWideVersion = useBreakpointValue({
    md: false,
    lg: false,
    xl: false
  });

  async function handlePrefetchTabulation() {
    await queryClient.prefetchQuery(
      ["tabulations"],
      async () => {
        const response = await api.get(`/listTabulation`, {
          params: {
            clientName: 'ailos',
          },
        });

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10 // 10 minutes fresh datas
      }
    );
  }

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
            bg="colorBackground.tabulationBox"
            p="8"
          >
            <Flex mb="8" justifyContent="space-between" align="center">
              <Heading
                size="lg"
                fontWeight="normal"
                color="colorText.titleTable"
              >
                Tabulações
                {!isLoading && isFetching && (
                  <Spinner size="sm" ringColor="colorText.spin" ml="5" />
                )}
              </Heading>
              <NextLink href="/tabulations/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="small"
                  bg="colorBackground.createTabulation"
                  cursor="pointer"
                  _hover={{
                    background: "colorBackground.createTabulationHover"
                  }}
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </NextLink>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      {/* <Th
                        px={["4", "4", "6"]}
                        color="gray.300"
                        width="8"
                      >
                        <Checkbox colorScheme="pink" />
                      </Th> */}
                      <Th>
                        (Dados Fictícios) Tabulações - Falha ao obter os dados
                        das tabulações
                      </Th>

                      {isWideVersion && <Th>Data de cadastro</Th>}

                      <Th width="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      {/* <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink" />
                      </Td> */}
                      <Td>
                        <Box>
                          <Link color="purple.400">
                            <Text fontWeight="bold">Ivan Oliveira</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">
                            ivanoliver131@gmail.com
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>25 de Abril de 2022</Td>}
                      {isWideVersion && (
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="small"
                            colorScheme="purple"
                            cursor="pointer"
                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                          >
                            Editar
                          </Button>
                        </Td>
                      )}
                    </Tr>
                  </Tbody>
                </Table>

                <Pagination
                  totalCountOfRegisters={1}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th color="colorText.textTable">Tabulação</Th>

                      {isWideVersion && <Th>Data de cadastro</Th>}

                      <Th width="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.tabulations.map((tabulation, i) => {
                      return (
                        <Tr key={tabulation.fileName}>
                          {/* <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                          </Td> */}
                          <Td>
                            <Box>
                              <Link
                                color="colorText.tabulationTitle"
                                onMouseEnter={() =>
                                  handlePrefetchTabulation()
                                }
                              >
                                <Text fontWeight="bold">{tabulation.fileName}</Text>
                              </Link>
                              <Text
                                fontSize="sm"
                                color="colorText.tabulationLink"
                              >
                                {tabulation.publicUrl}
                              </Text>
                            </Box>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>

                <Pagination
                  totalCountOfRegisters={data?.totalCount || 0}
                  currentPage={page}
                  onPageChange={setPage}
                />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
