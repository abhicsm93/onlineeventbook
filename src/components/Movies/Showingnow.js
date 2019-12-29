import React, { Component } from "react";
import { getShowingMovies } from "../../actions";
import PropTypes from "prop-types";
import DisplayList from "../DisplayList/DisplayList";
import { connect } from "react-redux";

class Showingnow extends Component {
  componentDidMount() {
    this.props.dispatch(getShowingMovies());
  }
  render() {
    return (
      <div>
        <h3>Showing Now</h3>
        <div className="row">
          <DisplayList moviedata={this.props.movieData} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movieData: state.showing_movie
  };
}
Showingnow.protoTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Showingnow);
