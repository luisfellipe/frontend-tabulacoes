import { useState } from "react";
import { Box } from "@chakra-ui/react";
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

  const { removeItemInContent, addItemInContent, saveNewItems } =
    useEditJSONContext();

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
    </Box>
  );
}
