import { ChangeEvent, useState } from "react";
import { Box, Divider, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { RiEdit2Fill } from "react-icons/ri";

import { useEditJSONContext } from "../../../contexts/EditJSONContext";

export default function NameContent() {

  function setInputVisibilityOff() {
    let input = document.querySelector<HTMLInputElement>('#InputName');
    input.style.display = 'none';
    input.value = '';
  }
  function setInputVisibilityOn() {
    let input = document.querySelector<HTMLInputElement>('#InputName');
    input.style.display = 'block';
    input.focus();
  }
  const { saveName, getName } = useEditJSONContext();

  const tabulationName = getName() ? getName() : "NOME DA TABULAÇÃO";


  function handleChangeTabulationName(event: ChangeEvent<HTMLInputElement>) {
    const newTabulationName = String(event.target.value).trim();
    saveName(newTabulationName);
  }

  return (
    <Box>
      <Flex alignItems="center" gap="0.5rem" p="0.5rem">
        <Text
          color="colorText.titleTable"
          fontSize={["12px", "16px", "22px"]}
          textAlign="left"
          fontWeight="bold"
        >
          {tabulationName}
        </Text>

        <Icon
          as={RiEdit2Fill}
          fontSize={["14px", "18px", "24px"]}
          cursor="pointer"
          textColor="colorText.editName"
          borderRadius="4px"
          p="2px"
          _hover={{
            background: "colorBackground.editNameHover"
          }}
          onClick={() => {
            setInputVisibilityOn();
          }}
        />
      </Flex>

      <Input
        placeholder="Digite o novo nome da Tabulação..."
        h="40px"
        id="InputName"
        border="none"
        mb="20px"
        mt="10px"
        minWidth="100%"
        p="10px"
        color="colorText.textTable"
        bg="colorBackground.typeAndItem"
        autoComplete="off"
        display="none"
        onChange={handleChangeTabulationName}
        onBlur={() => setInputVisibilityOff()}
      />

      <Divider />
    </Box>
  );
}
