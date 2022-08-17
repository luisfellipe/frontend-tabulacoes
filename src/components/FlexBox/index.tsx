import { useEffect, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import { useImportContext } from "../../contexts/ImportContext";
import NotFound from "./NotFound";
import ImportarButton from "./Buttons/ImportarButton";
import CriarJSONButton from "./Buttons/CriarJSONButton";
import { Content, Item, Skill } from "./Types";
import ContentGroup from "./ContentGroup";
import { SalvarJSONButton } from "./Buttons/SalvarJSONButton";
import { useEditJSONContext } from "../../contexts/EditJSONContext";

export default function FlexBox(props) {
  const { fileJson } = useImportContext();
  const { contents, saveContents, saveSkills } = useEditJSONContext();
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
      const tmpSkills = parseContent[0].skills.map((skillName) => {
        return {
          id: String(uuidv4()),
          name: skillName
        } as Skill;
      });
      saveContents(tmpContents);
      saveSkills([...tmpSkills]);
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
        <ImportarButton />
        {!contentIsEmpty && <SalvarJSONButton />}
        {contentIsEmpty && <CriarJSONButton />
        }
      </Flex>
      {
        contentIsEmpty ? (
          <NotFound />
        ) : (
            <ContentGroup
              skills={skills.current}
              contentList={contents}
          />
        )
      }
    </Box >
  );
}
