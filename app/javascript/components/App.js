import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { AppProvider, EmptyState, Page } from '@shopify/polaris';
import { authenticatedFetch } from '@shopify/app-bridge-utils';
import TestData from './TestData'

import enTranslations from '@shopify/polaris/locales/en.json';
import React from 'react';

export default function App() {

  return (
     <AppProvider i18n={enTranslations}>
       <ApolloProvider client={client}>
         <Page>
           <EmptyState>
             <TestData/>    # Add the TestData component here
           </EmptyState>
         </Page>
       </ApolloProvider>
     </AppProvider>
   );
 }