import { Box, Flex, Text } from "@chakra-ui/react";

export default function ContentGroupHeader() {
  return (
    <Flex maxWidth={1120}>
      <Box m="5px" borderRadius="15px" width={["50%", "30%"]}>
        <Text
          p="0.5rem"
          color="colorText.titleTable"
          fontSize={["12px", "16px", "22px"]}
          textAlign="left"
          fontWeight="bold"
        >
          TIPO
        </Text>
      </Box>
      <Box
        flexDirection="row"
        width={["50%", "70%"]}
        m="5px"
        borderRadius="15px"
      >
        <Text
          p="8px"
          color="colorText.titleTable"
          fontSize={["12px", "16px", "22px"]}
          textAlign="left"
          fontWeight="bold"
        >
          ITEM
        </Text>
      </Box>
    </Flex>
  );
}
