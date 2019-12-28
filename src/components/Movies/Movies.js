import React, { Component } from "react";
import { getMovies } from "../../actions";
import PropTypes from "prop-types";
import DisplayList from "../DisplayList/DisplayList";
import { connect } from "react-redux";
import "./Movies.css";

class Movies extends Component {
  componentDidMount() {
    this.props.dispatch(getMovies());
  }
  render() {
    return (
      <div className="container">
        <h3>Movies</h3>
        <div className="row">
          <DisplayList moviedata={this.props.movieData} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieData: state.movie
  };
}
Movies.protoTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Movies);
