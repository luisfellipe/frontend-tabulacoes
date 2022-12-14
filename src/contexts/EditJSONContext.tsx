import { createContext, ReactNode, useContext, useState } from "react";
import {
  Content,
  Item,
  JSONFile,
  Skill
} from "../components/TabulationBox/Types";
import { v4 as uuidV4 } from "uuid";

interface ImportContextProviderProps {
  children: ReactNode;
}

type EditJsonContextData = {
  contents: Array<any>;
  saveName: (name: string) => void;
  getName: () => string;
  saveContents: (contents: Content[]) => void;
  saveNewItems: (item: Item, contentIndex: number, index: number) => void;
  saveAllItems: (index: number, newItens: Item[]) => void;
  removeContent: (id: string) => void;
  removeItemInContent: (ontentIndex: number, itemIndex: number) => void;
  addItemInContent: (
    item: Item,
    contentIndex: number,
    indexItem: number
  ) => void;
  addNewContentBelow: (index: number) => void;
  changeContent: (content: Content) => void;
  saveSkills: (skills: Skill[]) => void;
  getSkills: () => Skill[];
  getJSONFile: () => [JSONFile];
  normalizeName: (name: string, size: number) => string;
  cleanStatesContext: () => void;
};

const EditJSONContext = createContext({} as EditJsonContextData);

export function EditJSONProvider({ children }: ImportContextProviderProps) {
  const [contents, setContents] = useState<Content[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [name, setName] = useState<string>("");

  function cleanStatesContext() {
    setName("");
    setContents([]);
    setSkills([]);
  }

  function saveNewItems(item: Item, contentIndex: number, index: number) {
    contents[contentIndex].subgroup[index] = item;
  }

  function saveAllItems(index, newItens) {
    contents[index].subgroup = newItens;
  }

  function saveContents(contents: Content[]) {
    setContents(contents);
  }

  function removeContent(id: string) {
    const tmpContents = contents.filter((ct: Content) => ct.id !== id);
    setContents([...tmpContents]);
  }

  function addNewContentBelow(index: number) {
    if (setContents.length === 0) {
      index = 0;
    }
    const content: Content = {
      item: "",
      id: String(uuidV4()),
      index,
      subgroup: [
        {
          item: "",
          id: String(uuidV4())
        } as Item
      ]
    };

    contents.splice(index, 0, content);
    setContents([...contents]);
  }

  function changeContent(content: Content) {
    if (contents.length < 1) {
      contents[0] = content;
    }
    contents[content.index] = content;
  }

  function addItemInContent(
    item: Item,
    contentIndex: number,
    indexItem: number
  ) {
    contents[contentIndex].subgroup.splice(indexItem, 0, item);
  }

  function removeItemInContent(contentIndex: number, itemIndex: number) {
    contents[contentIndex].subgroup.splice(itemIndex, 1);
  }

  function saveSkills(skills: Skill[]) {
    let skillNames: string[] = skills.map((skill: Skill) => skill.name.trim());
    let tmpSkills = skills.filter((skill: Skill) => {
      return skillNames.filter((name: string) => !(skill.name.trim() === name));
    });
    setSkills([...tmpSkills]);
  }

  function getSkills(): Skill[] {
    return skills;
  }

  function saveName(name: string) {
    setName(name);
  }

  function getName() {
    return name;
  }

  function getJSONFile(): [JSONFile] {
    return [
      {
        name: name,
        skills: skills.map((skill: Skill) => skill.name),
        content: contents.map((content: Content) => {
          return {
            item: content.item,
            subgroup: content.subgroup.map((item: Item) => item.item)
          };
        })
      } as JSONFile
    ];
  }

  function normalizeName(name: string, size: number) {
    if (name.length > size) {
      name = name.slice(0, size).concat("...");
    } else {
      return name;
    }
    return name;
  }

  return (
    <EditJSONContext.Provider
      value={{
        contents,
        getJSONFile,
        saveNewItems,
        saveContents,
        saveAllItems,
        removeContent,
        removeItemInContent,
        addItemInContent,
        addNewContentBelow,
        changeContent,
        saveSkills,
        getSkills,
        saveName,
        getName,
        normalizeName,
        cleanStatesContext
      }}
    >
      {children}
    </EditJSONContext.Provider>
  );
}

export const useEditJSONContext = () => useContext(EditJSONContext);
