import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { DarkmodeProvider } from "../contexts/DarkmodeContext";
import { dark } from "../styles";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import { ImportProvider } from "../contexts/ImportContext";
import { EditJSONProvider } from "../contexts/EditJSONContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <DarkmodeProvider>
        <ImportProvider>
          <EditJSONProvider>
            <ChakraProvider theme={dark}>
              <SidebarDrawerProvider>
                <Component {...pageProps} />
              </SidebarDrawerProvider>
            </ChakraProvider>
          </EditJSONProvider>
        </ImportProvider>
      </DarkmodeProvider>
    </QueryClientProvider>
    // </AuthProvider>
  );
}

export default MyApp;
