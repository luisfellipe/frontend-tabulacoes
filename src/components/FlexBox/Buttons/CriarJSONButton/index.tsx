import { Box, Button, Icon } from "@chakra-ui/react";
import { RiEditBoxFill } from "react-icons/ri";

export default function CriarJSONButton(props) {
  return (
    <Box mr="3">
      <Button
        as="a"
        size="sm"
        fontSize="small"
        bg="colorBackground.createJsonButton"
        cursor="pointer"
        leftIcon={<Icon as={RiEditBoxFill} fontSize="20" />}
        _hover={{
          background: "colorBackground.createJsonButtonHover"
        }}
        transition="0.2s"
        onClick={props.addContent}
      >
        Criar JSON
      </Button>
    </Box>
  );
}
