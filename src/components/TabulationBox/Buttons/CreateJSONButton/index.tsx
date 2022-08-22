import { Box, Button, Icon } from "@chakra-ui/react";
import { RiEditBoxFill } from "react-icons/ri";
import { useEditJSONContext } from "../../../../contexts/EditJSONContext";

export function CreateJSONButton(props) {
  const { addNewContentBelow } = useEditJSONContext();
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
        onClick={() => addNewContentBelow(0)}
      >
        Criar JSON
      </Button>
    </Box>
  );
}
