import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light ">
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapse"
        aria-controls="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {" "}
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapse">
        <ul className="navbar-nav ml-auto mr-auto text-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movies/showingnow">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
