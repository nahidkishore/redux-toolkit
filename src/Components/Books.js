import React from 'react';
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from '../store/services/bookService';

const Books = () => {
  const { data = [], isLoading, isError } = useGetBooksQuery();
  console.log(data);

  const [deleteBook, { isLoading: loading, isError: error }] =
    useDeleteBookMutation();
  if (isLoading)
    return (
      <div className='container'>
        <h2>Loading....</h2>
      </div>
    );
  return (
    <div className='container'>
      {data.map((book) => (
        <div className='list' key={book.id}>
          <div className='list--name'>
            <span>Name</span>
            {book.name}
          </div>
          <div className='list--author'>
            <span>Author</span>
            {book.author}
          </div>
          <div className='list--button'>
            <button onClick={() => deleteBook(book.id)}>Delete Book</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
<h2>Books page</h2>;
