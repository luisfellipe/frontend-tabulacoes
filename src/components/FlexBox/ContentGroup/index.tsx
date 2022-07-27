import ItemGroup from "../ItemGroup";
import SkillGroup from "../SkillGroup";
import { Content } from "../Types";
import { useEditJSONContext } from "../../../contexts/EditJSONContext";
import ContentGroupHeader from "../ContentGroupHeader";
import { Box, Text } from "@chakra-ui/react";
import ContentField from "../ContentField";

export default function ContentGroup(props) {
  const { contentList, skills } = props;

    const { changeContent, addNewContentBelow, removeContent } = useEditJSONContext();
  /**
   * modifica o valor do content
   * @param event : Event
   */
  function handleChangeContent(content: Content) {
    changeContent(content);
  }

  function handleAddNewContentBelow(contentIndex: number) {
    console.log("adicionanodo c: ", contentIndex)
    addNewContentBelow(contentIndex);
  }

  function handleRemoveContent(id: string) {
    removeContent(id);
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
