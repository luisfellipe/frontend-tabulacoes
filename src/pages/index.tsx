import {  ChakraProvider } from "@chakra-ui/react";
import { Login } from "../components/Login";
import { useStyle } from "../hooks/useStyle";


export default function Home(props: any) {
  const theme = useStyle();
  return (
    <ChakraProvider theme={theme}>
      <Login/>
    </ChakraProvider>
  );
}
