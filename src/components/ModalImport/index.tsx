import React, { useCallback, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import Dropzone from './dropzone';
import { StyleHook } from "../../hooks/StyleHook";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalImport({ isOpen, onClose }: ModalProps) {
  const theme = StyleHook();

  const [fileJson, setFileJson] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map((file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            setFileJson(() => [
              JSON.stringify(e.target.result)
            ],
            )
        };
        reader.readAsText(file);
        return file;
      });
    }, []);

    fileJson.map((content) => {
      const parseContent = JSON.parse(content);
      console.log(parseContent);
      return parseContent;
    });

  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent background="colorBackground.modal" height="400px" width={["320px", "360px", "400px", "600px"]}>
          <ModalHeader
            textAlign='center'
            color="colorText.titleModal"
            fontSize={["12px", "14px", "18px", "20px"]}
          >Importar um arquivo JSON</ModalHeader>
          <ModalCloseButton color="colorText.closeModal" />
          <ModalBody
            marginTop="15px"
            marginBottom="15px"
          >
            <Dropzone onDrop={onDrop} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}