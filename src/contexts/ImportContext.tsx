import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from "react";

interface ImportContextProviderProps {
  children: ReactNode;
}

type ImportDrawerContextData = {
  fileJson: Array<any>;
  setarJson: (contentJson: any) => void;
};

const ImportContext = createContext({} as ImportDrawerContextData);

export function ImportProvider({ children }: ImportContextProviderProps) {
  const [fileJson, setFileJson] = useState([]);

  function setarJson(contentJson: any) {
    setFileJson([...contentJson]);
  }

  return (
    <ImportContext.Provider value={{ fileJson, setarJson }}>
      {children}
    </ImportContext.Provider>
  );
}

export const useImportContext = () => useContext(ImportContext);
