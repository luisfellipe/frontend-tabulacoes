import { ChangeEvent, ReactNode } from "react";
import { Flex, Icon, Input, Tooltip } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";

import { useEditJSONContext } from "../../../contexts/EditJSONContext";

interface Item {
  index: number;
  id: string;
  item: string;
}

interface Content {
  index: number;
  id: string;
  item: string;
  subgroup: Item[];
}

interface ContentFieldProps {
  contentIndex: number;
  content: Content;
  children: ReactNode;
}

export function ContentField({
  contentIndex,
  content,
  children
}: ContentFieldProps) {
  const { changeContent, removeContent, addNewContentBelow } =
    useEditJSONContext();

  function handleChangeContent(event: ChangeEvent<HTMLInputElement>) {
    changeContent({
      ...content,
      item: event.target.value
    });
  }

  return (
    <Flex key={content.id} maxWidth={1120}>
      <Tooltip hasArrow label={content.item} placement="left" mt="10px">
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
          />

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
              onClick={() => removeContent(content.id)}
            />

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
              onClick={() => addNewContentBelow(contentIndex + 1)}
            />
          </Flex>
        </Flex>
      </Tooltip>
      {children}
    </Flex>
  );
}
