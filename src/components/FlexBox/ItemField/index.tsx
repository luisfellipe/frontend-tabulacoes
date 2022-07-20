import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon
} from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import { RiAddLine } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import { MdDragHandle } from "react-icons/md";
import { useState } from "react";
import { Item } from "../Types";
import { useEditJSONContext } from "../../../contexts/EditJSONContext";

export default function ItemField(props) {
  const { itemIndex, contentIndex } = props;
  const [item, setItem] = useState<Item>(props.item as Item);
  const { saveNewItens } = useEditJSONContext();

  function handleChangeItem(event) {
    const itemName = event.target.value;
    const tmpItem = {
      item: itemName,
      id: item.id
    } as Item;
    setItem(tmpItem);
    saveNewItens(tmpItem, contentIndex, itemIndex);
  }

  function removeItem() {
    props.removeItem(itemIndex);
  }

  function addItem() {
    props.addItem(itemIndex + 1);
  }

  return (
    <Draggable key={item.id} draggableId={item.id} index={itemIndex}>
      {(provided) => (
        <Flex
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="5px"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Box
            bg="colorBackground.typeAndItem"
            margin="5px"
            borderRadius="5px"
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <InputGroup>
              <InputLeftAddon
                bg="colorBackground.inputLeftAddon"
                border="none"
                width="1%"
                height="100%"
                justifyContent="center"
              >
                <Icon
                  as={MdDragHandle}
                  color="colorText.subtractButton"
                  fontSize={["0.7rem", "1.2rem"]}
                  borderRadius="4px"
                  textColor="colorText.dragIcon"
                  transition="0.2s"
                ></Icon>
              </InputLeftAddon>
              <Input
                key={item.id}
                p="12px"
                variant="unstyled"
                color="colorText.textTable"
                fontSize={["10px", "12px", "14px"]}
                textAlign="center"
                placeholder="Digite o nome do item ..."
                defaultValue={item.item}
                onChange={(event) => handleChangeItem(event)}
              ></Input>
            </InputGroup>

            <Box display="flex" alignItems="center" margin="8px">
              <Icon
                as={BiTrash}
                color="colorText.subtractButton"
                fontSize={["0.7rem", "1.2rem"]}
                borderRadius="4px"
                mr="8px"
                cursor="pointer"
                textColor="colorText.deleteButton"
                _hover={{
                  color: "colorText.deleteButtonHover"
                }}
                transition="0.2s"
                onClick={removeItem}
              ></Icon>

              <Icon
                as={RiAddLine}
                color="white"
                fontSize={["0.7rem", "1.2rem"]}
                borderRadius="4px"
                cursor="pointer"
                textColor="colorText.addButton"
                _hover={{
                  color: "colorText.addButtonHover",
                  background: "colorBackground.addButtonHover"
                }}
                transition="0.2s"
                onClick={addItem}
              ></Icon>
            </Box>
          </Box>
        </Flex>
      )}
    </Draggable>
  );
}

