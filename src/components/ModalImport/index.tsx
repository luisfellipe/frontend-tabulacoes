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
  import { useState } from "react";
  import { StyleHook } from "../../hooks/StyleHook";
  
  
  interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export function ModalImport({ isOpen, onClose }: ModalProps) {
    const theme = StyleHook();
  
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
            >IMPORTE SEU JSON</ModalHeader>
            <ModalCloseButton color="colorText.closeModal" />
            <ModalBody
              marginTop="15px"
              marginBottom="15px"
            >
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    );
  }