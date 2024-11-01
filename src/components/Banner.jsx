import React from 'react';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen container mx-auto my-8 rounded-lg p-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-11">
        <img
          src="images/books.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className='flex flex-col items-start gap-3'>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          
          <button className="btn text-white bg-[#23BE0A]">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
