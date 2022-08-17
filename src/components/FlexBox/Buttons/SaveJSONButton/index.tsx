import { Box, Button, Icon, useDisclosure } from "@chakra-ui/react";
import { RiSave2Fill } from "react-icons/ri";
import { useEditJSONContext } from "../../../../contexts/EditJSONContext";

export function SaveJSONButton() {
  const { getJSONFile } = useEditJSONContext();

  function saveJSON() {
    const jsonFile = getJSONFile();
    console.log(jsonFile);
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
