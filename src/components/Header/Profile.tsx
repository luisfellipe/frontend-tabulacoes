import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>ZENVIA</Text>
          <Text color="colorText.email" fontSize="small">
            &copy; frontend-tabulações
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="ZENVIA"
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQEr8itF97-YsA/company-logo_200_200/0/1625608694707?e=1665014400&v=beta&t=9VnD6DSnYDwL4Qi7hIN5lVqxxbdxFgieYKD2PzoMGa8"
      />
    </Flex>
  );
}
