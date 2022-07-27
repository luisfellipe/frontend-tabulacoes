import { createContext, ReactNode, useContext, useState } from "react";
import { Content, Item, JSONFile, Skill } from "../components/FlexBox/Types";
import { v4 as uuidv4 } from "uuid";

interface ImportContextProviderProps {
  children: ReactNode;
}

type EditJsonContextData = {
  json: Array<any>;
  saveJSON: () => void;
  saveNewItems: (item: Item, contentIndex: number, index: number) => void;
  saveAllItems: (index: number, newItens: Item[]) => void;
  setarJson: (contentJson: any) => void;
  removeContent: (id: string) => void;
  removeItemInContent: (ontentIndex: number, itemIndex: number) => void;
  addItemInContent: (
    item: Item,
    contentIndex: number,
    indexItem: number) => void;
  addNewContentBelow: (index: number) => void;
  changeContent: (content: Content) => void;

  saveSkills: (skills: Skill[]) => void;
};

const EditJSONContext = createContext({} as EditJsonContextData);

export function EditJSONProvider({ children }: ImportContextProviderProps) {
  const [json, setJson] = useState([]);
  let newJSON = json;
  const jsonFile: JSONFile = {
    name: "Nome da Intância",
    contents: [],
    skills: []
  };


  function saveNewItems(item: Item, contentIndex: number, index: number) {
    json[contentIndex].subgroup[index] = item;
    newJSON = json;
  }

  function saveAllItems(index, newItens) {
    json[index].subgroup = newItens;
    newJSON = json;
  }

  function saveJSON() {
    setJson(newJSON);
    console.log(json)
  }

  function setarJson(JSON: any) {
    setJson([...JSON]);
    newJSON = json;
  }

  function removeContent(id: string) {
   const tmpJSON =  json.filter((ct: Content) => ct.id !== id)
    console.log("remove: ", tmpJSON);
    setJson([...tmpJSON]);
    newJSON = json;
  }

  function addNewContentBelow(index: number) {
    if (setJson.length === 0) {
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
    console.log("adiciona: ", json);
    setJson([...json]);
    newJSON = json;
  }

  function changeContent(content: Content) {
    json[content.index] = content;
     newJSON = json;
  }

  function addItemInContent(
    item: Item,
    contentIndex: number,
    indexItem: number
  ) {
    json[contentIndex].subgroup.splice(indexItem, 0, item);
    // setJson([...json]);
    newJSON = json;
  }

  function removeItemInContent(contentIndex: number, itemIndex: number) {
    json[contentIndex].subgroup.splice(itemIndex, 1);
    // setJson([...json]);
    newJSON = json;
  }

  function saveSkills(skills: Skill[]) {
    jsonFile.skills = skills;
  }
  
  return (
    <EditJSONContext.Provider value={{
      json,
      saveNewItems,
      saveJSON,
      saveAllItems,
      setarJson,
      removeContent,
      removeItemInContent,
      addItemInContent,
      addNewContentBelow,
      changeContent,
      saveSkills
    }}>
      {children}
    </EditJSONContext.Provider>
  );
}

export const useEditJSONContext = () => useContext(EditJSONContext);
