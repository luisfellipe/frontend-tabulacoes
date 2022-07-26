import { Box, Flex, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SkillItem from "../SkillItem";
import { Skill } from "../Types";

export default function SkillGroup(props) {
  const [skills, setSkills] = useState<Skill[]>(props.skills as Skill[]);

  function handleAddSkill(event) {
    let name = event.target.value;
    if (name.length > 1) {
      const skill = {
        id: String(uuidv4()),
        name
      } as Skill;
      skills.push(skill);
      skills.sort((skill1, skill2) => {
        if (skill1.name.length > skill2.name.length) {
          return 1;
        } else if (skill1.name.length < skill2.name.length) {
          return -1;
        } else {
          return 0;
        }
      });
      setSkills([...skills]);
    }
  }
  function handleRemoveSkill(id: string) {
    if (skills.length === 1) {
      setSkills([]);
    }
    let tmpSkills = skills.filter((skill) => skill.id != id);
    setSkills([...tmpSkills]);
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
          color="black"
          display="none"
          onBlur={(event) => {
              const input = event.target;
              input.style.display = "none";
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleAddSkill(event);
            }
          }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
