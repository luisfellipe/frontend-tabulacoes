import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useEditJSONContext } from "../../../contexts/EditJSONContext";


export default function NameContent() {
  const { saveName, getNome} = useEditJSONContext();
  return (
    <Box>
        <Text
          p="0.5rem"
          color="colorText.titleTable"
          fontSize={["12px", "16px", "22px"]}
          textAlign="left"
          fontWeight="bold"
        >
        {getNome() === ''? 'NOME DA TABULAÇÃO': getNome()}
      </Text>
      <Flex
        justifyContent="space-between"
        overflow="auto"
        borderRadius="5px"
        display="flow"
        mb="20px"
        mt="10px"
        maxWidth="100%"
        minWidth="100%"
        minHeight="40px"
        maxHeight="fit-content"
        padding="10px"
        bg="colorBackground.typeAndItem"
        onClick={() => {
          let inputSkill = document.getElementById("InputName");
          inputSkill.style.display = "flex"
          inputSkill.focus();
          
        }}
      >
       
      <Box>
          <Input
            placeholder="Digite o novo nome da Tabulação ..."
            h="30px"
            id="InputName"
            border="none"
            color="colorText.skillItem"
            autoComplete="off"
            
            onKeyDown={
              (event) => {
                let inputSkill = document.querySelector("InputName");
                if (event.key === "Enter") {
                  saveName(String(inputSkill.textContent).trim());
                  return;
                }
              } 
            }
          />
        </Box>
      </Flex>
    </Box>
  )
}