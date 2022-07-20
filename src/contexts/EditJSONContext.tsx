import { createContext, ReactNode, useContext, useState } from "react";
import { Content, Item } from "../components/FlexBox/Types";
import { v4 as uuidv4 } from "uuid";

interface ImportContextProviderProps {
  children: ReactNode;
}

type EditJsonContextData = {
  json: Array<any>;
  saveJSON: () => void;
  saveNewContent: (contentName: string, contentIndex: number) => void;
  saveNewItens: (item: Item, contentIndex: number, index: number) => void;
  saveAllItens: (index: number, newItens: Item[]) => void;
  setarJson: (contentJson: any) => void;
  removeContent: (index: number) => void;
  removeItemInContent: (ontentIndex: number, itemIndex: number) => void;
  addItemInContent: (
    item: Item,
    contentIndex: number,
    indexItem: number) => void;
  addNewContentBelow: (contentJson: any) => void;
  changeContent: (contentName: string, contentIndex: number) => void;
};

const EditJSONContext = createContext({} as EditJsonContextData);

export function EditJSONProvider({ children }: ImportContextProviderProps) {
  const [json, setJson] = useState([]);
  let newJSON = json;

  function saveNewContent(contentName: string, contentIndex: number) {
    let tmpContent = json[contentIndex];
    tmpContent.item = contentName;
    newJSON = json;
  }

  function saveNewItens(item: Item, contentIndex: number, index: number) {
    json[contentIndex].subgroup[index] = item;
    newJSON = json;
  }

  function saveAllItens(index, newItens) {
    console.log(index, newItens);
    json[index].subgroup = newItens;
    newJSON = json;
  }

  function saveJSON() {
    setJson(newJSON);
  }

  function setarJson(JSON: any) {
    setJson([...JSON]);
    newJSON = json;
  }

  function removeContent(index: number) {
    json.splice(index, 1);
    setJson([...json]);
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
    setJson([...json]);
    newJSON = json;
  }

  function changeContent(contentName: string, contentIndex: number) {
    let tmpContent = json[contentIndex];
    tmpContent.item = contentName;
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

  return (
    <EditJSONContext.Provider value={{ json, saveNewItens, saveNewContent, saveJSON, saveAllItens, setarJson, removeContent, removeItemInContent, addItemInContent, addNewContentBelow, changeContent }}>
      {children}
    </EditJSONContext.Provider>
  );
}

export const useEditJSONContext = () => useContext(EditJSONContext);
