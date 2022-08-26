import { Box, Button, Icon, useDisclosure } from "@chakra-ui/react";
import { RiSave2Fill } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import { useEditJSONContext } from "../../../../contexts/EditJSONContext";
import { api } from "../../../../services/api";

import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export function SaveJSONButton() {
  const router = useRouter();
  const { getJSONFile } = useEditJSONContext();

  async function saveJSON() {
    const jsonFile = getJSONFile();

    const { data } = await api.post('/updateTabulation', {
      bucket: 'altuclients/tabulacao/json/ailos',
      json: jsonFile
    });

    toast.success(data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    router.push("/tabulations");
  }

  return (
    <Box mr="3" ml="2.4">
      <Button
        as="a"
        size="sm"
        fontSize="small"
        bg="colorBackground.importButton"
        cursor="pointer"
        leftIcon={<Icon as={RiSave2Fill} fontSize="20" />}
        _hover={{
          background: "colorBackground.importButtonHover"
        }}
        transition="0.2s"
        onClick={saveJSON}
      >
        Salvar JSON
      </Button>
    </Box>
  );
}
