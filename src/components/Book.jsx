import React from "react";
import { Link } from "react-router-dom";

const Book = (book) => {
  return (
    <div className="bg-green-900 p-5 m-5 rounded-xl">
      <div className=" flex items-center justify-center">
        <img src={book.cover_img} alt="cover" style={{ height: "200px" }} />
      </div>
      <div className=" text-center text-white">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span className="font-bold py-2 ">{book.title}</span>
          </div>
        </Link>

        <div className="book-item-info-item author fs-15">
          <span className="font-bold">Author: </span>
          <span>{book.author}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="font-bold">First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
