import { ChakraProvider } from "@chakra-ui/react";
import AppProvider from "hooks";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import Layout from "../components/layout";

import customTheme from "../styles/customTheme";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppProvider>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AppProvider>
  );
};

export default MyApp;
