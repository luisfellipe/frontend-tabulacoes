import { Box, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SkillItem from "../SkillItem";
import { Skill } from "../Types";

export default function SkillGroup(props) {
  const [skills, setSkills] = useState<Skill[]>(props.skills as Skill[]);
  let eventAdded = false;

  function handleAddSkill(event) {
    let name = event.target.value;
    if (name.length > 1) {
      const skill = {
        id: String(uuidv4()),
        name
      } as Skill;
      setSkills([...skills, skill]);
    }
    console.log("sss", skills);
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
        borderRadius="5px"
        display="flex"
        mb="20px"
        mt="10px"
        maxWidth="100%"
        minWidth="100%"
        minHeight="40px"
        maxHeight="fit-content"
        padding="10px"
        backgroundColor="#F0F2F5"
        onClick={() => {
          console.log(skills);
          let inputSkill = document.getElementById("inputSkill");
          if (eventAdded === false) {
            console.log("CCCCCCCCCCCCCCCCCCCCCCCCCC");
            inputSkill.addEventListener("keypress", (event) => {
              if (event.key === "Enter") {
                handleAddSkill(event);
              }
            });
            eventAdded = true;
          }

          inputSkill.focus();
        }}
      >
        {skills.map((skill: Skill, index: number) => {
          return (
            <Box>
              <SkillItem
                key={skill.id}
                skill={skill}
                index={index}
                handleRemoveSkill={handleRemoveSkill}
              />
            </Box>
          );
        })}

        <Box>
          <Input
            h="30px"
            id="inputSkill"
            border="none"
            color="black"
            backgroundColor="#CDCDCD"
            minWidth="30px"
            maxWidth="auto"
          ></Input>
        </Box>
      </Flex>
    </Box>
  );
}
