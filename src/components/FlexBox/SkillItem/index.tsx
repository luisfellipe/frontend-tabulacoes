import { Tag, TagCloseButton, TagLabel, Tooltip } from "@chakra-ui/react";

import { Skill } from "../Types";

import { useEditJSONContext } from "../../../contexts/EditJSONContext";

interface SkillItemProps {
  skill: Skill;
  handleRemoveSkill: (id: string) => void;
}

export default function SkillItem({ skill, handleRemoveSkill }: SkillItemProps) {
  const { normalizeName } = useEditJSONContext();
  const MAXSIZE = 32;
  const label = skill.name.length > MAXSIZE ? skill.name : '';

  function removeSkill() {
    handleRemoveSkill(skill.id);
  }

  return (
    <Tooltip hasArrow label={label} placement="left" mt="10px">
      <Tag
        size="md"
        borderRadius="4px"
        variant="solid"
        bg="colorBackground.skillItem"
        color="colorText.skillItem"
        m="4px"
      >
      <TagLabel>{normalizeName(skill.name, MAXSIZE)}</TagLabel>
      <TagCloseButton
        id={skill.id}
        fontSize={["0.7rem", "1.2rem"]}
        _hover={{
          color: "colorText.deleteButtonHover"
        }}
        transition="color 0.2s"
        onClick={removeSkill}
      />
      </Tag>
    </Tooltip>
    
  );
}
