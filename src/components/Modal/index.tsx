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
import { StyleHook } from "../../hooks/StyleHook";
import { listInstances } from "./listInstances";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalComponent({ isOpen, onClose }: ModalProps) {
  const theme = StyleHook();
  const instances = listInstances;

  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay 
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent background="colorBackground.modal">
          <ModalHeader textAlign='center' color="colorText.titleModal">SELECIONE A INSTÂNCIA</ModalHeader>
          <ModalCloseButton color="colorText.closeModal"/>
          <ModalBody>
            <Input 
              placeholder='Digite uma instância' 
              color="colorText.textSearchModal" 
              focusBorderColor="colorFocus.inputModal"
            />
            {instances.map((instance) => {
              return (
                <Button 
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  w='100%'
                  my='3px'
                  _first={{ marginTop: '15px' }}
                  key={instance}
                  background="colorBackground.backgroundButtonModal"
                  color="colorText.textModal"
                  onClick={onClose}
                >
                  {instance}
                </Button>
              )
            })}
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}