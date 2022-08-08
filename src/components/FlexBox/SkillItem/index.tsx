import { Box, Icon, Text } from "@chakra-ui/react";
import { BiX } from "react-icons/bi";
import { Skill } from "../Types";
import { useEditJSONContext } from "../..//../contexts/EditJSONContext";

export default function SkillItem(props) {
  const skill = props.skill as Skill;
  const { normalizeName } = useEditJSONContext();
  function removeSkill() {
    props.handleRemoveSkill(skill.id);
  }

  return (
    <Box display="inline-flex" mb="10px" color="colorText.skillItem">
      <Box
        borderRadius="5px"
        display="flex"
        bg="rgba(151, 202, 249, 0.5)"
        width="fit-content"
        boxSizing="border-box"
        h="30px"
        mr="20px"
      >
        <Text
          margin="auto"
          color="colorText.skillItem"
          pl="8px"
          pr="8px"
          fontSize="12pt"
        >
          {normalizeName(skill.name, 20)}
        </Text>

        <Icon
          id={skill.id}
          as={BiX}
          display="flex"
          alignItems="center"
          color="colorText.skillItem"
          fontSize={["0.7rem", "1.2rem"]}
          borderRadius="4px"
          cursor="pointer"
          textColor="colorText.deleteButton"
          mt="5px"
          mr="5px"
          _hover={{
            color: "colorText.deleteButtonHover"
          }}
          transition="0.2s"
          onClick={removeSkill}
        />
      </Box>
    </Box>
  );
}
