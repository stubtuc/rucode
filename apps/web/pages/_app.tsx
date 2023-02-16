import * as React from "react";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from 'next/app';

import client from '../api/client';

interface CustomPageProps {
  // props
}

const App = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;