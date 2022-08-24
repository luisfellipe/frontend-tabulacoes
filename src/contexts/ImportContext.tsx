import { createContext, ReactNode, useContext, useState } from "react";

interface ImportContextProviderProps {
  children: ReactNode;
}

type ImportDrawerContextData = {
  fileJson: Array<any>;
  setJson: (contentJson: any) => void;
};

const ImportContext = createContext({} as ImportDrawerContextData);

export function ImportProvider({ children }: ImportContextProviderProps) {
  const [fileJson, setFileJson] = useState([]);

  function setJson(contentJson: any) {
    setFileJson([...contentJson]);
  }

  return (
    <ImportContext.Provider value={{ fileJson, setJson }}>
      {children}
    </ImportContext.Provider>
  );
}

export const useImportContext = () => useContext(ImportContext);
