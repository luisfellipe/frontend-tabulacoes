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
import { api } from "../../services/api";

export function TabulationBoxUpdated({ publicUrl }: any) {
  const { contents, saveContents, saveSkills, saveName } = useEditJSONContext();
  let skills = useRef<Skill[]>([]);

  async function getJSONbyURL(publicUrl: string) {
    const { data } = await api.get(publicUrl);

    let tmpContents = data[0].content.map(
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
    const tmpSkills = data[0].skills.map((skillName) => {
      return {
        id: String(uuidV4()),
        name: skillName
      } as Skill;
    });

    saveContents(tmpContents);
    saveSkills([...tmpSkills]);
    saveName(data[0].name);
    skills.current = tmpSkills;
  }

  useEffect(() => {
    getJSONbyURL(publicUrl);
  }, []);

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
        {!contentIsEmpty && <SaveJSONButton />}
      </Flex>
      {contentIsEmpty ? <NotFound /> : <ContentGroup contentList={contents} />}
    </Box>
  );
}
