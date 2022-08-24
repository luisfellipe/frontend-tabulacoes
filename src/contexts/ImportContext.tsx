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
  setJson: (contentJson: any) => void;
};

const ImportContext = createContext({} as ImportDrawerContextData);

export function ImportProvider({ children }: ImportContextProviderProps) {
  const [fileJson, setFileJson] = useState([]);

  const setJson = useCallback(
    (contentJson: any) => {
      setFileJson([...contentJson]);
    },
    [setFileJson]
  );

  return (
    <ImportContext.Provider value={{ fileJson, setJson }}>
      {children}
    </ImportContext.Provider>
  );
}

export const useImportContext = () => useContext(ImportContext);
