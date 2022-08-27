import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  ChakraProvider
} from "@chakra-ui/react";
import { useState } from "react";
import { useStyle } from "../../../hooks/useStyle";
import { listInstances } from "./listInstances";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalComponent({ isOpen, onClose }: ModalProps) {
  const theme = useStyle();
  const [instances, setInstances] = useState<String[]>(listInstances);

  function handleSearch(e: String) {
    const newUpdatedInstace: String[] = [];
    const textTyped = new RegExp(e.toUpperCase(), "g");

    for (const instance of listInstances) {
      if (instance.match(textTyped)) {
        newUpdatedInstace.push(instance);
      } else {
        setInstances(listInstances);
      }
    }

    setInstances(newUpdatedInstace);
  }

  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          background="colorBackground.modal"
          height="400px"
          width={["320px", "360px", "400px", "600px"]}
        >
          <ModalHeader
            textAlign="center"
            color="colorText.titleModal"
            fontSize={["12px", "14px", "18px", "20px"]}
          >
            SELECIONE A INSTÂNCIA
          </ModalHeader>
          <Input
            placeholder="Digite uma instância"
            color="colorText.textSearchModal"
            focusBorderColor="colorFocus.inputModal"
            w="85%"
            m="auto"
            justifyContent="center"
            onKeyUp={(e: any) => handleSearch(e.target.value)}
          />
          <ModalCloseButton color="colorText.closeModal" />
          <ModalBody marginTop="15px" marginBottom="15px">
            {instances.map((instance, i) => {
              return (
                <Button
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  w="100%"
                  my="3px"
                  key={i}
                  background="colorBackground.backgroundButtonModal"
                  color="colorText.textModal"
                  onClick={onClose}
                >
                  {instance}
                </Button>
              );
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
