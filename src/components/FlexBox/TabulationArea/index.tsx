import { Box } from "@chakra-ui/react";
import ContentGroup from "../ContentGroup";
import ContentGroupHeader from "../ContentGroupHeader";
import Skills from "../Skills";
import { Content } from "../Types";

export default function TabulationArea(props) {
  const { contentList, skills } = props;

  function saveItem(item) {
    props.saveItem(item);
  }

  return (
    <Box>
      <Skills skills={skills} />
      <ContentGroupHeader />
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
