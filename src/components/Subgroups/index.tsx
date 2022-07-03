import { Box, Text } from "@chakra-ui/react";

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
            <Box 
              key={subgroup.item} 
              bg="pink.600" 
              m="5px" 
              borderRadius="5px" 
            >
              <Text  p="8px" color="white" fontSize={["10px", "12px", "14px"]} textAlign="center">{subgroup.item}</Text>
            </Box>
          )
        })
      } 
    </>
  );
}