import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { TabulationBoxUpdated } from "../../components/TabulationBoxUpdate";
import { useStyle } from "../../hooks/useStyle";
import { api } from '../../services/api';

interface TabulationProps {
  tabulationSelected: {
    fileName: string;
    publicUrl: string;
  }
};

type Tabulation = {
  fileName: string;
  publicUrl: string;
};


export default function Tabulations({ tabulationSelected }: TabulationProps) {
  const theme = useStyle();

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
          <TabulationBoxUpdated publicUrl={tabulationSelected.publicUrl} />
        </Flex>
      </Box>
    </ChakraProvider>

  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;
  const { data } = await api.get("/listTabulation", {
    params: {
      clientName: "ailos"
    }
  });

  const tabulationSelected = data.find((tabulation: Tabulation) => tabulation.fileName === slug);

  return {
    props: {
      tabulationSelected
    }
  }
}