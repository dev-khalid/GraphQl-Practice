import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
const GET_BOOKS = gql`
  {
    books {
      name
      genre
      author {
        name
        age
      }
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  return (
    <div>
      {loading && <h2>Loading....</h2>}
      <ul id="book-list">
        {!loading &&
          data.books.length > 0 &&
          data.books.map((book, id) => {
            console.log(book.name);
            return <li key={id}>{book.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default BookList;
