import { useDropzone } from 'react-dropzone'
import {
  Box,
  ChakraProvider,
  Center,
  Text
} from "@chakra-ui/react";
import { StyleHook } from "../../hooks/StyleHook";

export default function Dropzone({ onDrop }) {

  const theme = StyleHook();

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
          'application/json': ['.json']
        }
    });

    const files = acceptedFiles.map(file => (
        <li key={file.name}>
            {file.name}
        </li>
    ));
    
    return (
      <ChakraProvider theme={theme}>
        <Box {...getRootProps({ className: "dropzone" })}
        border='3px gray dashed'
        textAlign='center'
        h='100px'
        position='relative'
        >
          <input className="input-zone" {...getInputProps()} />
          <Center>
            {isDragActive ? (
              <Text 
              color='black'
              >
                Release to drop the files here
              </Text>
            ) : (
              <Text 
              color='black'
              >
                Drag’n’drop some files here, or click to select files
              </Text>
            )}
          </Center>
          <aside>
            <ul>{files}</ul>
          </aside>
        </Box>
        </ChakraProvider>
    );    
};