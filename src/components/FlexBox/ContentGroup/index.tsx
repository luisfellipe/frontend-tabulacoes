import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import ItemGroup from "../ItemGroup";
import { Content } from "../Types";
import { useState } from "react";
import { useEditJSONContext } from "../../../contexts/EditJSONContext";

export default function ContentGroup(props) {
  let { contentIndex } = props;
  const [content, setContent] = useState<Content>(props.content as Content);
  const { saveNewContent, addNewContentBelow, removeContent } = useEditJSONContext();
  /**
   * modifica o valor do content
   * @param event : Event
   */
  function handleChangeContent(event) {
    let contentName = event.target.value;
    content.item = contentName;
    setContent(content);
    saveNewContent(contentName, contentIndex);
  }

  function handleAddNewContentBelow() {
    addNewContentBelow(contentIndex + 1);
  }

  function handleRemoveContent() {
    removeContent(contentIndex);
  }

  return (
    <Flex key={content.id} maxWidth={1120}>
      <Flex
        bg="colorBackground.typeAndItem"
        m="5px"
        borderRadius="5px"
        width={["50%", "30%"]}
        justifyContent="space-between"
      >
        <Input
          p="12px"
          color="colorText.textTable"
          variant="unstyled"
          fontSize={["10px", "12px", "14px"]}
          textAlign="center"
          placeholder="Digite o nome do Content ..."
          defaultValue={content.item}
          onChange={handleChangeContent}
        ></Input>
        <Flex alignItems="end" mb="12px" mr="8px">
          <Icon
            as={BiTrash}
            color="colorText.iconText"
            fontSize={["0.7rem", "1.2rem"]}
            borderRadius="4px"
            cursor="pointer"
            textColor="colorText.deleteButton"
            mr="8px"
            _hover={{
              color: "colorText.deleteButtonHover"
            }}
            transition="0.2s"
            onClick={handleRemoveContent}
          ></Icon>

          <Icon
            as={RiAddLine}
            color="colorText.addButtonColor"
            fontSize={["0.7rem", "1.2rem"]}
            borderRadius="4px"
            cursor="pointer"
            textColor="colorText.addButton"
            _hover={{
              color: "colorText.addButtonHover",
              background: "colorBackground.addButtonHover"
            }}
            transition="0.2s"
            onClick={handleAddNewContentBelow}
          ></Icon>
        </Flex>
      </Flex>

      <ItemGroup
        key={content.id}
        contentIndex={contentIndex}
        items={content.subgroup}
        changeItem={props.changeItem}
        addItemInContent={props.addItemInContent}
        removeItemInContent={props.removeItemInContent}
      />
    </Flex>
  );
}
