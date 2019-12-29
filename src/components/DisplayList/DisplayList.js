import React from "react";
import "./DisplayList.css";
import { Link } from "react-router-dom";

const DisplayList = ({ type, moviedata }) => {
  if (moviedata !== undefined) {
    return moviedata.data.map(movie => {
      return (
        <div key={movie.title} className="col-6 col-sm-2 ">
          <Link
            to={`/${type}/details/${movie.id}`}
            style={{ textDecoration: "none" }}
          >
            <figure>
              <img src={movie.posterurl} alt={movie.title}></img>
              <figcaption>
                <strong>{movie.title}</strong>
              </figcaption>
            </figure>
          </Link>
        </div>
      );
    });
  }
  return null;
};

export default DisplayList;
