import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loader";
import coverImg from "../images/cover_not_found.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section>
      <div>
        <button
          type="button"
          className="flex px-10 py-10"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="font-bold text-3xl">Go Back</span>
        </button>

        <div className=" flex flex-col items-center justify-center w-full">
          <div className="m-auto max-h-[600px]">
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className="">
            <div className="px-10 py-10 text-3xl font-bold text-center">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>
            <div className="px-10 py-10">
              <span>{book?.description}</span>
            </div>
            <div className="px-10">
              <span className="font-bold">Subject Places: </span>
              <span className="font-bold">{book?.subject_places}</span>
            </div>
            <div className="px-10">
              <span className="fw-6">Subject Times: </span>
              <span className="text-italic">{book?.subject_times}</span>
            </div>
            <div className="px-10 py-10">
              <span className="font-bold">Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
