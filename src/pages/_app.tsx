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
import { Session } from "next-auth";
import { NextComponentType, NextPageContext } from "next";
interface CustomAppProps extends AppProps {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: {
    session: Session,
    auth?: boolean
  }
}
function MyApp({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) {
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
