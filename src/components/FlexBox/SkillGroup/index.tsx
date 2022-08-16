import { Box, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SkillItem from "../SkillItem";
import { useEditJSONContext } from "../../../contexts/EditJSONContext";
import { Skill } from "../Types";

export default function SkillGroup(props) {
  const { saveSkills, getSkills } = useEditJSONContext();
  let skills: Skill[] = sortSkills(getSkills());

  function handleAddSkill(name: string) {
    if (notContainSkill(name)) {
      if (name.length > 1) {
        const skill = {
          id: String(uuidv4()),
          name
        } as Skill;
        skills.push(skill);
        const tmpSkills = sortSkills(skills);
        saveSkills([...tmpSkills]);
        console.log(tmpSkills)
      }
    }
  }
  function handleRemoveSkill(id: string) {
    if (skills.length === 1) {
      saveSkills([]);
    }
    let tmpSkills = sortSkills(skills.filter((skill) => skill.id !== id));
    saveSkills(tmpSkills);
  }

  function sortSkills(skills: Skill[]) {
    skills.sort((skill1, skill2) => {
      if (skill1.name.length > skill2.name.length) {
        return 1;
      } else if (skill1.name.length < skill2.name.length) {
        return -1;
      } else {
        return 0;
      }
    });
    return skills;
  }

  function notContainSkill(name: String): boolean {
    name = name.trim().toLowerCase();
    return !skills.some(
      (skill) => (skill.name.trim().toLowerCase() === name));
  }

  return (
    <Box>
      <Flex
        justifyContent="space-between"
        overflow="auto"
        borderRadius="5px"
        display="flow"
        mb="20px"
        mt="10px"
        maxWidth="100%"
        minWidth="100%"
        minHeight="40px"
        maxHeight="fit-content"
        padding="10px"
        bg="colorBackground.typeAndItem"
        onClick={() => {
          let inputSkill = document.getElementById("inputSkill");
          inputSkill.style.display = "flex"
          inputSkill.focus();
          
        }}
      >
        {skills.map((skill: Skill, index: number) => {
          return (
            <SkillItem
              key={skill.id}
              skill={skill}
              index={index}
              handleRemoveSkill={handleRemoveSkill}
            />
          );
        })}
      <Box>
        <Input
            h="30px"
            id="inputSkill"
            border="none"
            color="colorText.skillItem"
            display="none"
            autoComplete="off"
            onBlur={
              (event) => {
                const input = event.target;
                input.style.display = "none";
                input.value = "";
              }
            }
            onKeyDown={
              (event) => {
                let input = String(event.target.value).trim();
                if (event.key === "Enter") {
                  handleAddSkill(input);
                  event.target.value = "";
                  return;
                }
              } 
            }
          />
        </Box>
      </Flex>
    </Box>
  );
}
