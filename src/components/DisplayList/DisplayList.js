import React from "react";
import "./DisplayList.css";

const DisplayList = ({ moviedata }) => {
  if (moviedata !== undefined) {
    return moviedata.data.map(movie => {
      return (
        <div key={movie.title} className="col-6 col-sm-2 ">
          <figure>
            <img src={movie.posterurl} alt={movie.title}></img>
            <figcaption>
              <strong>{movie.title}</strong>
            </figcaption>
          </figure>
        </div>
      );
    });
  }
  return null;
};

export default DisplayList;
