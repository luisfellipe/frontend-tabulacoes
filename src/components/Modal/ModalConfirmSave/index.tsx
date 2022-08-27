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
  Divider
} from "@chakra-ui/react";

import { useEditJSONContext } from "../../../contexts/EditJSONContext";
import { useStyle } from "../../../hooks/useStyle";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { api } from "../../../services/api";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalConfirmSave({ isOpen, onClose }: ModalProps) {
  const theme = useStyle();
  const router = useRouter();
  const { getJSONFile } = useEditJSONContext();

  async function saveJSON() {
    const jsonFile = getJSONFile();
    console.log(jsonFile);
    const { data } = await api.post("/updateTabulation", {
      bucket: "altuclients/tabulacao/json/ailos",
      json: jsonFile
    });

    toast.success(data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

    router.push("/tabulations");
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
          height="200px"
          width="320px"
        >
          <ModalHeader
            color="colorText.titleModal"
            fontSize={["12px", "14px", "18px", "20px"]}
          >
            Tem certeza que deseja salvar o JSON?
          </ModalHeader>
          <Divider />
          <ModalCloseButton color="colorText.closeModal" />
          <ModalBody
            gap="16px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button onClick={onClose} color="colorText.textButton" w="50%">
              NÃO
            </Button>
            <Button onClick={saveJSON} color="colorText.textButton" w="50%">
              SIM
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
