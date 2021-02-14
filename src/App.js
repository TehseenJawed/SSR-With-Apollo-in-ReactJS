import React from 'react';
import client from './config'
import { ApolloProvider } from '@apollo/client';
import Home from './container/Home'
import './App.css';



function App() {

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
