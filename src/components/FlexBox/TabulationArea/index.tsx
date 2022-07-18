import { Box } from "@chakra-ui/react";
import ContentGroup from "../ContentGroup";
import ContentGroupHeader from "../ContentGroupHeader";
import Skills from "../Skills";
import { Content } from "../Types";

export default function TabulationArea(props) {
  const { contentList, skills } = props;

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
            removeContent={props.removeContent}
            addNewContentBelow={props.addNewContentBelow}
            changeItem={props.changeItem}
            changeContent={props.changeContent}
            addItemInContent={props.addItemInContent}
            removeItemInContent={props.removeItemInContent}
          />
        );
      })}
    </Box>
  );
}
