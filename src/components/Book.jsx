import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const {
    image,
    author,
    bookName,
    category,
    rating,
    review,
    publisher,
    bookId,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="border rounded-lg p-4 space-y-3">
        <div className="bg-[#F3F3F3] rounded-lg p-6 flex items-center justify-center">
          <img src={image} alt="" className="rounded-lg h-[166px] " />
        </div>
        <h1 className="font-bold text-2xl">{bookName}</h1>
        <p>By: {author}</p>
      </div>
    </Link>
  );
};


export default Book;
