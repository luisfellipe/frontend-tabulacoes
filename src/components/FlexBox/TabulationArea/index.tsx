import { Box, Text } from "@chakra-ui/react";
import ContentGroup from "../ContentGroup";
import ContentGroupHeader from "../ContentGroupHeader";
import SkillGroup from "../SkillGroup";
import { Content } from "../Types";

export default function TabulationArea(props) {
  const { contentList, skills } = props;

  function saveItem(item) {
    props.saveItem(item);
  }

  return (
    <Box>
      <Text
        p="0.5rem"
        color="colorText.titleTable"
        fontSize={["12px", "16px", "22px"]}
        textAlign="left"
        fontWeight="bold"
      >
        SKILL
      </Text>
      <SkillGroup key="skillgroup" skills={skills} />
      <ContentGroupHeader key="ContentGroupHeader" />
      {contentList.map((content: Content, index: number) => {
        return (
          <ContentGroup
            key={content.id}
            content={content}
            contentIndex={index}
            saveItem={saveItem}
          />
        );
      })}
    </Box>
  );
}
