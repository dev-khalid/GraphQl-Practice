import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;
const ADD_BOOK = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook, { data: newBook }] = useMutation(ADD_BOOK);
  console.log(newBook);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState();
  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addBook({ variables: { name, genre, authorId } });
  };
  return (
    <>
      Add Books:
      <form id="add-book" onSubmit={submitHandler}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option>Select author</option>
            {displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    </>
  );
};

export default AddBook;
