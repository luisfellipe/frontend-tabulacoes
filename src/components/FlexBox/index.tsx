import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { useImportContext } from "../../contexts/ImportContext";
import NotFound from "./NotFound";
import ImportarButton from "./Buttons/ImportarButton";
import CriarJSONButton from "./Buttons/CriarJSONButton";
import { Content, Item } from "./Types";
import TabulationArea from "./TabulationArea";
import { SalvarJSONButton } from "./Buttons/SalvarJSONButton";
import { useEditJSONContext } from "../../contexts/EditJSONContext";

export default function FlexBox(props) {
  const [skills, setSkills] = useState<string[]>([]);
  const { fileJson } = useImportContext();
  const { json, setarJson } = useEditJSONContext();
  let parseContent;

  useEffect(() => {
    if (fileJson.length > 0) {
      const json = fileJson;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      parseContent = JSON.parse(json[0]);

      let contents = parseContent[0].content.map(
        (content: Content, index: number) => {
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
      setarJson(contents);
    }
  }, [fileJson]);

  function addNewContentBelow(index: number) {
    if (json.length === 0) {
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
    json.splice(index, 0, content);
    setarJson([...json]);
  }

  const contentIsEmpty = json.length === 0;

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
        {!contentIsEmpty && <SalvarJSONButton />}
        {contentIsEmpty &&
          <> <SalvarJSONButton /><CriarJSONButton addContent={addNewContentBelow} /></>
        }
      </Flex>
      {
        contentIsEmpty ? (
          <NotFound />
        ) : (
          <TabulationArea
            skills={skills}
            contentList={json}
          />
        )
      }
    </Box >
  );
}
