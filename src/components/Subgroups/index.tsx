import { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon
} from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { RiAddLine } from "react-icons/ri";
import { BiTrash } from "react-icons/bi";
import { MdDragHandle } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

type ItemSubgroups = {
  id: string;
  item: string;
};

interface SubgroupsProps {
  subgroup: ItemSubgroups[];
}

export function Subgroups({ subgroup }: SubgroupsProps) {
  const [newSubgroup, setNewSubgroups] = useState(subgroup);

  function handleOnDragEnd(result) {
    const newItemsArray = Array.from(newSubgroup);
    const [reorderedItem] = newItemsArray.splice(result.source.index, 1);
    newItemsArray.splice(result.destination.index, 0, reorderedItem);

    setNewSubgroups([...newItemsArray]);
  }

  function handleAddSubgroup(index: number) {
    const hookNewSubgroup = newSubgroup;
    hookNewSubgroup.splice(index + 1, 0, { id: String(uuidv4()), item: "-" });
    setNewSubgroups([...hookNewSubgroup]);
  }

  function handleRemoveSubgroup(index: number) {
    if (newSubgroup.length <= 1) {
      const zerarSubgroup = newSubgroup;
      zerarSubgroup[index].item = "-";
      setNewSubgroups([...zerarSubgroup]);
      return;
    }
    const hookNewSubgroup = newSubgroup;
    hookNewSubgroup.splice(index, 1);
    setNewSubgroups([...hookNewSubgroup]);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="items">
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {newSubgroup.map((subgroup: ItemSubgroups, index) => {
              return (
                <Draggable
                  key={subgroup.id}
                  draggableId={subgroup.id}
                  index={index}
                >
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
                            p="12px"
                            variant="unstyled"
                            color="colorText.textTable"
                            fontSize={["10px", "12px", "14px"]}
                            textAlign="center"
                            defaultValue={subgroup.item}
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
                            onClick={() => handleRemoveSubgroup(index)}
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
                            onClick={() => handleAddSubgroup(index)}
                          ></Icon>
                        </Box>
                      </Box>
                    </Flex>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}
