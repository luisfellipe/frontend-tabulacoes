import { Box, Text } from "@chakra-ui/react";

import { ItemGroup } from "../ItemGroup";
import { SkillGroup } from "../SkillGroup";
import { ContentGroupHeader } from "../ContentGroupHeader";
import { ContentField } from "../ContentField";
import { NameContent } from "../NameContent";

import { Content } from "../Types";

interface ContentGroupProps {
  contentList: Content[];
}

export function ContentGroup({ contentList }: ContentGroupProps) {
  return (
    <Box>
      <NameContent />
      <Text
        p="0.5rem"
        color="colorText.titleTable"
        fontSize={["12px", "16px", "22px"]}
        textAlign="left"
        fontWeight="bold"
      >
        SKILLS
      </Text>
      <SkillGroup />
      <ContentGroupHeader key="ContentGroupHeader" />
      {contentList.map((content, index: number) => {
        return (
          <ContentField key={content.id} content={content} contentIndex={index}>
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
