import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";

export default function ContentField(props) {
  let { contentIndex, content } = props;

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
          onChange={(event) => {
            props.handleChangeContent(String(event.target.value))
          }}
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
            onClick={() => props.handleRemoveContent(content.id)}
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
            onClick={() => props.handleAddNewContentBelow(contentIndex + 1)}
          ></Icon>
        </Flex>
      </Flex>
      {props.children}
    </Flex>
  );
}