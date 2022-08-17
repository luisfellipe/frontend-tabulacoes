import ItemGroup from "../ItemGroup";
import { SkillGroup } from "../SkillGroup";
import { Content } from "../Types";
import { useEditJSONContext } from "../../../contexts/EditJSONContext";
import { ContentGroupHeader } from "../ContentGroupHeader";
import { Box } from "@chakra-ui/react";
import { ContentField } from "../ContentField";
import { NameContent } from "../NameContent";

export function ContentGroup(props) {
  const { contentList } = props;
  const { changeContent, addNewContentBelow, removeContent } =
    useEditJSONContext();

  function handleChangeContent(content: Content) {
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
      <SkillGroup key="skillgroup" />
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
