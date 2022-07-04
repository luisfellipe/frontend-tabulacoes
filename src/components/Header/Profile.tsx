import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import zenvia from "../../assets/images/zenvia.jpg";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return(
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>ZENVIA</Text>
          <Text 
            color="colorText.email" 
            fontSize="small"
          >
            &copy; frontend-tabulações
          </Text>
        </Box>
      )}
      <Avatar 
        size="md"
        name="ZENVIA"
        src="../../assets/images/zenvia.jpg"
      />
    </Flex>
  );
}