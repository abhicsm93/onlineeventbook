import React, { Component } from "react";

import "./Movies.css";
import { Link } from "react-router-dom";

class Movies extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ padding: "1rem" }}>
          <span>
            <button className="btn btn-info">
              {" "}
              <Link
                to="/movies/showingnow"
                style={{ color: "black", textDecoration: "none" }}
              >
                Showing Now
              </Link>{" "}
            </button>
            <button className="btn btn-info">
              <Link
                to="/movies/comingsoon"
                style={{ color: "black", textDecoration: "none" }}
              >
                Coming Soon
              </Link>{" "}
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Movies;
