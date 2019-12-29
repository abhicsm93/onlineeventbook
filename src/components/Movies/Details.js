import React, { Component } from "react";
import {
  getSelectedShowingMovie,
  getSelectedComingSoonMovie
} from "../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DisplayDetails from "./DisplayDetails";

class Details extends Component {
  componentDidMount() {
    this.props.dispatch(getSelectedShowingMovie(this.props.match.params.id));
    this.props.dispatch(getSelectedComingSoonMovie(this.props.match.params.id));
  }
  render() {
    return (
      <div className="text-justify">
        <DisplayDetails
          type={
            this.props.location.pathname.includes("showingnow")
              ? "showingnow"
              : "comingsoon"
          }
          detailsData={
            this.props.location.pathname.includes("showingnow")
              ? this.props.showingMovieData
              : this.props.comingSoonMovieData
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showingMovieData: state.selected_showing_movie,
    comingSoonMovieData: state.selected_coming_soon_movie
  };
}

Details.protoTypes = {
  dispatch: PropTypes.func
};

export default connect(mapStateToProps)(Details);
