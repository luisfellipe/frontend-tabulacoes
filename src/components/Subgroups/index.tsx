import { Box, Text } from "@chakra-ui/react";

interface SubgroupsProps {
  subgroups: string[];
}

export function Subgroups({ subgroups }: SubgroupsProps) {
  return (
    <>
      {subgroups.map((subgroup: string) => {
          return (
            <Box 
              key={subgroup} 
              bg="pink.600" 
              m="5px" 
              borderRadius="5px" 
            >
              <Text  p="8px" color="white" fontSize={["10px", "12px", "14px"]} textAlign="center">{subgroup}</Text>
            </Box>
          )
        })
      } 
    </>
  );
}