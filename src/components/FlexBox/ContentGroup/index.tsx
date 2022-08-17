import { Box, Text } from "@chakra-ui/react";

import ItemGroup from "../ItemGroup";
import { SkillGroup } from "../SkillGroup";
import { ContentField } from "../ContentField";
import { NameContent } from "../NameContent";
import { ContentGroupHeader } from "../ContentGroupHeader";

import { useEditJSONContext } from "../../../contexts/EditJSONContext";

import { Content, Skill } from "../Types";

interface ContentGroupProps {
  skills: Skill[];
  contentList: any[];
}

export function ContentGroup({ skills, contentList }: ContentGroupProps) {
  const { changeContent, addNewContentBelow, removeContent } =
    useEditJSONContext();

  function handleChangeContent(content: any) {
    changeContent(content);
  }

  function handleAddNewContentBelow(contentIndex: number) {
    addNewContentBelow(contentIndex);
  }

  function handleRemoveContent(id: string) {
    removeContent(id);
  }

  return (
    <Box>
      <NameContent></NameContent>
      <Text
        p="0.5rem"
        color="colorText.titleTable"
        fontSize={["12px", "16px", "22px"]}
        textAlign="left"
        fontWeight="bold"
      >
        SKILLS
      </Text>
      <SkillGroup skills={skills} key="skillgroup" />
      <ContentGroupHeader key="ContentGroupHeader" />
      {contentList.map((content: Content, index: number) => {
        return (
          <ContentField
            key={content.id}
            content={content}
            contentIndex={index}
            handleAddNewContentBelow={handleAddNewContentBelow}
            handleRemoveContent={handleRemoveContent}
            handleChangeContent={handleChangeContent}
          >
            <ItemGroup
              key={content.id}
              contentIndex={index}
              items={content.subgroup}
            />
          </ContentField>
        );
      })}
    </Box>
  );
}
