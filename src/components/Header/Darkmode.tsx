import { Button, HStack, Icon } from "@chakra-ui/react";
import { RiMoonLine } from "react-icons/ri";
import { useDarkmodeContext } from "../../contexts/DarkmodeContext";

export function Darkmode() {
  const { changeMode } = useDarkmodeContext();

  function handleChangeMode() {
    changeMode();
  }

  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="colorIcon.moon"
      borderRightWidth={1}
      borderColor="#353646"
    >
      {/* <Icon as={RiNotificationLine} fontSize="20" /> */}
      <Button 
        bg="transparent"
        _hover={{bg: 'transparent'}}
        onClick={handleChangeMode}
      >
        <Icon 
          as={RiMoonLine} 
          fontSize="20" 
        /> 
      </Button>      
    </HStack>
  );
}