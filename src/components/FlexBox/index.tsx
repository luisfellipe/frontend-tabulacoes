import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { useImportContext } from "../../contexts/ImportContext";
import NotFound from "./NotFound";
import ImportarButton from "./Buttons/ImportarButton";
import CriarJSONButton from "./Buttons/CriarJSONButton";
import { Content, Item } from "./Types";
import TabulationArea from "./TabulationArea";

export default function FlexBox(props) {
  const [skills, setSkills] = useState<string[]>([]);
  const [contentList, setContentList] = useState<Content[]>([]);
  const { fileJson } = useImportContext();
  let isImport = false;
  let parseContent;

  useEffect(() => {
    if (fileJson.length > 0) {
      const json = fileJson;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      parseContent = JSON.parse(json[0]);
      // console.log("parseContent", parseContent);

      let contents = parseContent[0].content.map(
        (content: Content, index: number) => {
          //console.log("CONTENTS", content);
          let subgroup = content.subgroup.map((item: Item, index: number) => {
            return {
              id: String(uuidv4()),
              item: item.item,
              index
            };
          });

          return {
            item: content.item,
            index,
            id: String(uuidv4()),
            subgroup
          };
        }
      );

      setSkills(parseContent[0].skill);
      setContentList([...contents]);
      isImport = true;
    }
  }, [fileJson]);

  ///////// CONTENT HANDLES //////////////
  function removeContent(index: number) {
    contentList.splice(index, 1);
    setContentList([...contentList]);
  }

  function addNewContentBelow(index: number) {
    if (contentList.length === 0) {
      index = 0;
    }
    const content: Content = {
      item: "",
      id: String(uuidv4()),
      index,
      subgroup: [
        {
          item: "",
          id: String(uuidv4())
        } as Item
      ]
    };
    contentList.splice(index, 0, content);
    setContentList([...contentList]);
  }

  function changeContent(contentName: string, contentIndex: number) {
    let tmpContent = contentList[contentIndex];
    tmpContent.item = contentName;
  }

  ////////////// ITEM HANDLES //////////////////////////////
  function addItemInContent(
    item: Item,
    contentIndex: number,
    indexItem: number
  ) {
    contentList[contentIndex].subgroup.splice(indexItem, 0, item);
    setContentList([...contentList]);
  }

  function removeItemInContent(contentIndex: number, itemIndex: number) {
    contentList[contentIndex].subgroup.splice(itemIndex, 1);
    setContentList([...contentList]);
  }

  function changeItem(item: Item, contentIndex: number, index: number) {
    contentList[contentIndex].subgroup[index] = item;
    setContentList([...contentList]);
  }

  const contentIsEmpty = contentList.length === 0;

  return (
    <Box
      flex="1"
      minWidth={340}
      borderRadius={8}
      bg="colorBackground.createTabulationBox"
      p="8"
    >
      <Flex mb="5" justifyContent="space-between" align="center">
        <ImportarButton />
        {contentIsEmpty && <CriarJSONButton addContent={addNewContentBelow} />}
      </Flex>
      {contentIsEmpty ? (
        <NotFound />
      ) : (
        <TabulationArea
          skills={skills}
          contentList={contentList}
          removeContent={removeContent}
          addNewContentBelow={addNewContentBelow}
          changeItem={changeItem}
          changeContent={changeContent}
          addItemInContent={addItemInContent}
          removeItemInContent={removeItemInContent}
        />
      )}
    </Box>
  );
}
