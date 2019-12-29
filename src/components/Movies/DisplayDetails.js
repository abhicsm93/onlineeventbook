import React from "react";
import { Link } from "react-router-dom";

const DisplayDetails = ({ type, detailsData }) => {
  console.log(detailsData);
  if (detailsData !== undefined) {
    return (
      <div className="container">
        <div style={{ display: "flex" }}>
          <h2>{detailsData.data[0].title}</h2>
          <button
            className="btn btn-primary"
            style={{ marginLeft: "1rem" }}
            hidden={type === "comingsoon" ? true : false}
          >
            <Link
              to="/ticketbooking"
              style={{ color: "black", textDecoration: "none" }}
            >
              Book Now
            </Link>
          </button>
        </div>

        <figure style={{ float: "right" }}>
          <img
            src={detailsData.data[0].posterurl}
            alt={detailsData.data[0].title}
          ></img>
        </figure>
        <h5 style={{ marginTop: "2rem" }}>Cast:</h5>
        <div style={{ display: "flex" }}>
          {detailsData.data[0].actors.map(actor => {
            return (
              <p key={actor} style={{ margin: "1rem" }}>
                {actor}
              </p>
            );
          })}
        </div>
        <p></p>
        <h5>Genres:</h5>
        <div style={{ display: "flex" }}>
          {detailsData.data[0].genres.map(genre => {
            return (
              <p key={genre} style={{ margin: "1rem" }}>
                {genre}
              </p>
            );
          })}
        </div>
        <h5>StoryLine:</h5>
        <p>{detailsData.data[0].storyline}</p>
      </div>
    );
  }
  return null;
};

export default DisplayDetails;
