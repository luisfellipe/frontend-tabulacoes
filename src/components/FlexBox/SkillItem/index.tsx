import { Box, Icon, Text } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { Skill } from "../Types";

export default function SkillItem(props) {
  const skill = props.skill as Skill;

  function removeSkill() {
    props.handleRemoveSkill(skill.id);
  }
  return (
    <Box display="inline-flex" mb="10px"
      onMouseEnter={() => {
        let iconDelete = document.getElementById(skill.id);
        iconDelete.style.display = "flex";
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          document.getElementById(skill.id).style.display = "flex";
        }, 5000);
      }}>
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
          color="black"
          pl="8px"
          pr="8px"
          fontSize="12pt"
        >
          {skill.name}
        </Text>

        <Icon
          id={skill.id}
          as={BiTrash}
          display="flex"
          alignItems="center"
          color="colorText.iconText"
          fontSize={["0.7rem", "1.2rem"]}
          borderRadius="4px"
          cursor="pointer"
          textColor="colorText.deleteButton"
          mt="5px"
          mr="5px"
          ml="5px"
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
