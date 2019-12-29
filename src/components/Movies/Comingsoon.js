import React, { Component } from "react";
import { getComingMovies } from "../../actions";
import PropTypes from "prop-types";
import DisplayList from "../DisplayList/DisplayList";
import { connect } from "react-redux";

class Comingsoon extends Component {
  componentDidMount() {
    this.props.dispatch(getComingMovies());
  }
  render() {
    return (
      <div>
        <h3>Coming Soon</h3>
        <div className="row">
          <DisplayList moviedata={this.props.movieData} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieData: state.coming_movie
  };
}
Comingsoon.protoTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Comingsoon);
