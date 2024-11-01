import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('BookData.json')
      .then((res) => res.json())
      .then((Books) => setBooks(Books));
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl text-center">Books</h1>
      <div className=' my-3 grid grid-cols-1 md:grid-cols-3 gap-4 '>
        {books.map((book) => (
          <Book book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
