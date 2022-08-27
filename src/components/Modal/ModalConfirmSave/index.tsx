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

  async function saveJSON(save: Boolean) {
    const jsonFile = getJSONFile();

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
          width="360px"
        >
          <ModalHeader
            textAlign="center"
            color="colorText.titleModal"
            fontSize={["12px", "14px", "18px", "20px"]}
          >
            Deseja salvar o JSON?
          </ModalHeader>
          <ModalCloseButton color="colorText.closeModal" />
          <ModalBody
            gap="16px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button onClick={onClose} color="colorText.textButton">
              NÃO
            </Button>
            <Button onClick={() => saveJSON(true)} color="colorText.textButton">
              SIM
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
