import { useDropzone } from "react-dropzone";
import {
  Box,
  ChakraProvider,
  Text,
  Flex,
  List,
  ListItem
} from "@chakra-ui/react";

import { useStyle } from "../../hooks/useStyle";

export default function Dropzone({ onDrop }) {
  const theme = useStyle();

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "application/json": [".json"]
      }
    });

  const files = acceptedFiles.map((file) => (
    <ListItem key={file.name}>{file.name}</ListItem>
  ));

  return (
    <ChakraProvider theme={theme}>
      <Box
        {...getRootProps({ className: "dropzone" })}
        border="3px gray dashed"
        display="flex"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        p="10px"
        h="100%"
        cursor="cell"
      >
        <input className="input-zone" {...getInputProps()} />
        <Flex
          color="colorText.textModal"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {isDragActive ? (
            <Text>Largue seu arquivo aqui.</Text>
          ) : (
            <Text>
              {files.length
                ? "Arquivos selecionados:"
                : "Arraste e solte aqui seu arquivo JSON ou clique para encontra-lo."}
            </Text>
          )}

          <List mt="10px" fontSize="14px" fontWeight="normal">
            {files}
          </List>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
