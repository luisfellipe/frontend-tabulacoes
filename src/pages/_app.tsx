import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { DarkmodeProvider } from "../contexts/DarkmodeContext";
import { dark } from "../styles";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import { ImportProvider } from "../contexts/ImportContext";
import { EditJSONProvider } from "../contexts/EditJSONContext";
import { SessionProvider } from 'next-auth/react'

import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // Provider by Okta
    <SessionProvider session={session} basePath="/api/auth">
      <QueryClientProvider client={queryClient}>
        <DarkmodeProvider>
          <ImportProvider>
            <EditJSONProvider>
              <ChakraProvider theme={dark}>
                <SidebarDrawerProvider>
                  <Head>
                    <title> Tabulações </title>
                  </Head>
                  <Component {...pageProps} />
                </SidebarDrawerProvider>
              </ChakraProvider>
            </EditJSONProvider>
          </ImportProvider>
        </DarkmodeProvider>
      </QueryClientProvider>
    </SessionProvider >

  );
}

export default MyApp;
