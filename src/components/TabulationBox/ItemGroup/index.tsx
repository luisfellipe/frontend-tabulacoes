import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidV4 } from "uuid";

import { ItemField } from "../ItemField";

import { useEditJSONContext } from "../../../contexts/EditJSONContext";

import { Item } from "../Types";

interface ItemGroupProps {
  items: Item[];
  contentIndex: number;
}

export function ItemGroup({ items, contentIndex }: ItemGroupProps) {
  const [itemArray, setItems] = useState<Item[]>(Array.from(items));

  const { removeItemInContent, addItemInContent, saveAllItems, saveNewItems } =
    useEditJSONContext();

  function handleOnDragEnd(result) {
    const newItemsArray = Array.from(itemArray);
    const [reorderedItem] = newItemsArray.splice(result.source.index, 1);
    console.log(reorderedItem);
    newItemsArray.splice(result.destination.index, 0, reorderedItem);

    setItems([...newItemsArray]);
    saveAllItems(contentIndex, newItemsArray);
  }

  function handleAddItem(index: number) {
    const item = {
      id: String(uuidV4()),
      item: ""
    } as Item;

    itemArray.splice(index, 0, item);

    setItems([...itemArray]);
    addItemInContent(item, contentIndex, index);
  }

  function handleRemoveItem(index: number) {
    if (itemArray.length <= 1) {
      throw `Item not removed: Só existe uma item na lista`;
    }

    if (itemArray[index]) {
      itemArray.splice(index, 1);
      setItems([...itemArray]);
      removeItemInContent(contentIndex, index);
    } else {
      throw `Não existe item no índice ${index} \nTamanho da lista de items: ${itemArray.length}`;
    }
  }

  function handleChangeItem(tmpItem, contentIndex, itemIndex) {
    saveNewItems(tmpItem, contentIndex, itemIndex);
  }

  return (
    <Box flexDirection="row" width={["50%", "70%"]}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="items">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {itemArray.map((item: Item, index: number) => {
                return (
                  <ItemField
                    key={item.id}
                    item={item}
                    contentIndex={contentIndex}
                    itemIndex={index}
                    changeItem={handleChangeItem}
                    addItem={handleAddItem}
                    removeItem={handleRemoveItem}
                  />
                );
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
}
