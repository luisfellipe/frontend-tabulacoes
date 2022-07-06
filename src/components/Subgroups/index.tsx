import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";

type ItemSubgroups = {
  item: string;
};

interface SubgroupsProps {
  subgroup: ItemSubgroups[];
}

export function Subgroups({ subgroup }: SubgroupsProps) {
  return (
    <>
      {subgroup.map((subgroup: ItemSubgroups) => {
        return (
          <Flex
            key={subgroup.item}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="5px"
          >
            <Box
              bg="colorBackground.typeAndItem"
              margin="5px"
              borderRadius="5px"
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Text
                p="12px"
                color="colorText.textTable"
                fontSize={["10px", "12px", "14px"]}
                textAlign="center"
              >
                {subgroup.item}
              </Text>

              <Box display="flex" alignItems="center" margin="8px">
                <Icon
                  as={BiTrash}
                  color="colorText.subtractButton"
                  fontSize={["0.7rem", "1.2rem"]}
                  borderRadius="4px"
                  mr="8px"
                  cursor="pointer"
                  textColor="colorText.deleteButton"
                  _hover={{
                    color: "colorText.deleteButtonHover",
                  }}
                  transition="0.2s"
                ></Icon>

                <Icon
                  as={RiAddLine}
                  color="white"
                  fontSize={["0.7rem", "1.2rem"]}
                  borderRadius="4px"
                  cursor="pointer"
                  textColor="colorText.addButton"
                  _hover={{
                    color: "colorText.addButtonHover",
                    background: "colorBackground.addButtonHover",
                  }}
                  transition="0.2s"
                ></Icon>
              </Box>
            </Box>
          </Flex>
        );
      })}
    </>
  );
}
