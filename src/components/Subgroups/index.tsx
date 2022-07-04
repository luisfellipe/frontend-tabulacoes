import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { RiAddBoxFill, RiAddLine, RiSubtractFill } from "react-icons/ri";

type ItemSubgroups = {
  item: string;
}

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
                bg="pink.600" 
                m="5px" 
                borderRadius="5px" 
                width="100%"
              >
                <Text  p="8px" color="white" fontSize={["10px", "12px", "14px"]} textAlign="center">{subgroup.item}</Text>
              </Box>
              <Icon as={RiSubtractFill} color="white" fontSize="18px" bg="red" borderRadius="100%" cursor="pointer"></Icon>
              <Icon as={RiAddLine} color="white" fontSize="18px" bg="blue" borderRadius="100%" cursor="pointer"></Icon>
            </Flex>
          )
        })
      } 
    </>
  );
}