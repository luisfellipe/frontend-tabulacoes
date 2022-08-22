import ItemGroup from "../ItemGroup";
import { SkillGroup } from "../SkillGroup";
import { Content } from "../Types";
import { useEditJSONContext } from "../../../contexts/EditJSONContext";
import { ContentGroupHeader } from "../ContentGroupHeader";
import { Box, Text } from "@chakra-ui/react";
import { ContentField } from "../ContentField";
import { NameContent } from "../NameContent";

export function ContentGroup(props) {
  const { contentList } = props;

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
      {contentList.map((content: Content, index: number) => {
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
