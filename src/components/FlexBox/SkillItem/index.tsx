import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Skill } from "../Types";

export default function SkillItem(props) {
  const skill = props.skill as Skill;

  function removeSkill() {
    props.handleRemoveSkill(skill.id);
  }
  return (
    <Box
      borderRadius="5px"
      display="flex"
      bg="green"
      width="fit-content"
      boxShadow="1px 1px 5px 1px"
      boxSizing="border-box"
      h="30px"
      mr="20px"
    >
      <Text
        margin="auto"
        color="white"
        pl="5px"
        fontWeight="bold"
        fontSize="14pt"
      >
        {skill.name}
      </Text>
      <Button
        float="right"
        mr="4px"
        mt="4px"
        _hover={{ color: "red" }}
        h="20px"
        w="4px"
        borderRadius="0"
        backgroundColor="green"
        onClick={removeSkill}
      >
        X
      </Button>
    </Box>
  );
}
