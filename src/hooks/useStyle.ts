import { useDarkmodeContext } from "../contexts/DarkmodeContext";
import { dark, light } from "../styles";

export function useStyle() {
  const { mode } = useDarkmodeContext();
  const theme = mode === "dark" ? dark : light;

  return theme;
}
