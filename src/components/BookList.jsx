import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loader";
import Book from "./Book";
import coverImg from "../images/cover_not_found.jpg";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loading />;
  return (
    <section className="">
      <div>
        <div className="">
          <h2>{resultTitle}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {booksWithCovers.slice(0, 20).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
