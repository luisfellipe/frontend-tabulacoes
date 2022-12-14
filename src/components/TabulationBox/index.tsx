import { useEffect, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { v4 as uuidV4 } from "uuid";

import { ContentGroup } from "./ContentGroup";
import { ImportButton } from "./Buttons/ImportButton";
import { NotFound } from "./NotFound";
import { SaveJSONButton } from "./Buttons/SaveJSONButton";
import { CreateJSONButton } from "./Buttons/CreateJSONButton";

import { useImportContext } from "../../contexts/ImportContext";
import { useEditJSONContext } from "../../contexts/EditJSONContext";

import { Content, Item, Skill } from "./Types";

export function TabulationBox() {
  const { fileJson } = useImportContext();
  const { contents, saveContents, saveSkills, saveName } = useEditJSONContext();
  let skills = useRef<Skill[]>([]);
  let parseContent;

  useEffect(() => {
    if (fileJson.length > 0) {
      const json = fileJson;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      parseContent = JSON.parse(json[0]);

      let tmpContents = parseContent[0].content.map(
        (content: Content, index: number) => {
          let subgroup = content.subgroup.map((item: Item, index: number) => {
            return {
              id: String(uuidV4()),
              item: item.item,
              index
            };
          });

          return {
            item: content.item,
            index,
            id: String(uuidV4()),
            subgroup
          };
        }
      );
      const tmpSkills = parseContent[0].skills.map((skillName) => {
        return {
          id: String(uuidV4()),
          name: skillName
        } as Skill;
      });
      saveContents(tmpContents);
      saveSkills([...tmpSkills]);
      saveName(parseContent[0].name);
      skills.current = tmpSkills;
    }
  }, [fileJson]);

  const contentIsEmpty = contents.length === 0;

  return (
    <Box
      flex="1"
      minWidth={340}
      borderRadius={8}
      bg="colorBackground.createTabulationBox"
      p="8"
    >
      <Flex mb="5" justifyContent="space-between" align="center">
        <ImportButton />
        {!contentIsEmpty && <SaveJSONButton />}
        {contentIsEmpty && <CreateJSONButton />}
      </Flex>
      {contentIsEmpty ? <NotFound /> : <ContentGroup contentList={contents} />}
    </Box>
  );
}
