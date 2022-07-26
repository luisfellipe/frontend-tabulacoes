import { useDropzone } from "react-dropzone";
import { Box, ChakraProvider, Center, Text } from "@chakra-ui/react";
import { StyleHook } from "../../hooks/StyleHook";

export default function Dropzone({ onDrop }) {
  const theme = StyleHook();

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "application/json": [".json"]
      }
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>{file.name}</li>
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
        <Center color="colorText.textModal">
          {isDragActive ? (
            <Text>Large seu arquivo aqui.</Text>
          ) : (
            <Text>
              Arraste e solte aqui seu arquivo JSON ou clique para encontro-lo.
            </Text>
          )}
        </Center>
        <aside>
          <ul>{files}</ul>
        </aside>
      </Box>
    </ChakraProvider>
  );
}
