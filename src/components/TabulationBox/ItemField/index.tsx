import { useState } from "react";
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

import { Item } from "../Types";

interface ItemFieldProps {
  item: Item;
  itemIndex: number;
  contentIndex: number;
  changeItem: (tmpItem: any, contentIndex: number, itemIndex: number) => void;
  removeItem: (itemIndex: number) => void;
  addItem: (itemIndex: number) => void;
}

export function ItemField({
  item,
  itemIndex,
  contentIndex,
  changeItem,
  removeItem,
  addItem
}: ItemFieldProps) {
  const [itemLocal, setItemLocal] = useState<Item>(item);

  function handleChangeItem(event) {
    const itemName = event.target.value;
    const tmpItem = {
      id: itemLocal.id,
      item: itemName
    } as Item;
    setItemLocal(tmpItem);
    changeItem(tmpItem, contentIndex, itemIndex);
  }

  function handleRemoveItem() {
    removeItem(itemIndex);
  }

  function handleAddItem() {
    addItem(itemIndex + 1);
  }

  return (
    <Draggable key={itemLocal.id} draggableId={itemLocal.id} index={itemIndex}>
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
                />
              </InputLeftAddon>
              <Input
                key={itemLocal.id}
                p="12px"
                variant="unstyled"
                color="colorText.textTable"
                fontSize={["10px", "12px", "14px"]}
                textAlign="center"
                placeholder="Digite o nome do item ..."
                defaultValue={itemLocal.item}
                onChange={handleChangeItem}
              />
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
                onClick={handleRemoveItem}
              />

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
                onClick={handleAddItem}
              />
            </Box>
          </Box>
        </Flex>
      )}
    </Draggable>
  );
}
