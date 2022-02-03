import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
     <>
     
     <BookList />
      <AddBook />
      </> 
    </ApolloProvider>
  );
}

export default App;
