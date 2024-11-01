import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from './utilities/addToDb';
import { addToWishList } from './utilities/addToWhiteList';

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((data) => data.bookId === id);
  const {
    image,
    author,
    bookName,
    category,
    rating,
    review,
    publisher,
    totalPages,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleAddToWhiteList = (id) => {
    addToWishList(id)
  }







  return (
    <div className="container mx-auto flex gap-7 my-14">
      <div className="bg-[#F3F3F3] rounded-lg p-6 flex items-center justify-center w-1/2">
        <img src={image} alt="" className="w-[425px]" />
      </div>
      <div className="space-y-3 w-1/2">
        <h1 className="font-bold text-4xl ">{bookName}</h1>
        <p className="font-medium text-xl">By: {author}</p>
        <hr />
        <h4>{category}</h4>
        <hr />
        <p className="font-normal text-base">
          <span className="font-bold">Review: </span> {review}
        </p>
        <hr />
        <p>Number of Pages: {totalPages}</p>
        <p>Publisher: {publisher}</p>
        <p>Year of Publishing: {yearOfPublishing}</p>
        <p>Rating: {rating}</p>
        <hr />
        <div className="flex gap-4">
          <button
            className="btn btn-accent btn-outline"
            onClick={() => handleMarkAsRead(id)}
          >
            Mark as Read
          </button>
          <button onClick={() => handleAddToWhiteList(id)} className="btn btn-accent text-white">Add to WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
