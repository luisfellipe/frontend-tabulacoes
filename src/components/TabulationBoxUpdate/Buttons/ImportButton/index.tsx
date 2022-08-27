import { Box, Button, Icon, useDisclosure } from "@chakra-ui/react";
import { RiDownload2Line } from "react-icons/ri";
import { ModalImport } from "../../../Modal/ModalImport";

export function ImportButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mr="3" ml="2.4">
      <Button
        as="a"
        size="sm"
        fontSize="small"
        bg="colorBackground.importButton"
        cursor="pointer"
        leftIcon={<Icon as={RiDownload2Line} fontSize="20" />}
        _hover={{
          background: "colorBackground.importButtonHover"
        }}
        transition="0.2s"
        onClick={() => onOpen()}
      >
        Importar
      </Button>
      <ModalImport isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
