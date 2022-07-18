import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../Types";
import ItemField from "../ItemField";

export default function ItemGroup(props) {
  const { items, contentIndex } = props;
  const [itemArray, setItems] = useState<Item[]>(Array.from(items));

  ///TODO
  function handleOnDragEnd(result) {
    const newItemsArray = Array.from(itemArray);
    const [reorderedItem] = newItemsArray.splice(result.source.index, 1);
    newItemsArray.splice(result.destination.index, 0, reorderedItem);

    setItems([...newItemsArray]);
  }

  /**
   * Adiciona um novo item abaixo do item atual
   * @param index localização do item na lista e no front
   */
  function addItem(index: number) {
    const item = {
      id: String(uuidv4()),
      item: `${index}`
    } as Item;

    itemArray.splice(index, 0, item);

    setItems([...itemArray]);
    props.addItemInContent(item, contentIndex, index);
  }

  /**
   * Remove item da lista
   * @param index localização do item na lista e no front
   */
  function removeItem(index: number) {
    if (itemArray.length <= 1) {
      throw `Item not removed: Só existe uma item na lista`;
    }
    if (itemArray[index]) {
      itemArray.splice(index, 1);
      setItems([...itemArray]);
      props.removeItemInContent(contentIndex, index);
    } else {
      throw `Não existe item no indice ${index} \nTamanho da lista de items: ${itemArray.length}`;
    }
  }

  /**
   *
   * @param item
   * @param contentIndex
   * @param index
   */
  function changeItem(item, contentIndex, index) {
    itemArray[index] = item;
    setItems([...itemArray]);
    props.changeItem(item, contentIndex, index);
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
                    addItem={addItem}
                    changeItem={changeItem}
                    removeItem={removeItem}
                  ></ItemField>
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