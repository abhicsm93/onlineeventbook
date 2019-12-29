import React, { Component } from "react";

class TicketBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticket: 0,
      movieName: props.movie
    };
  }
  countUpdate(e) {
    this.setState({ ticket: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          className="text-center"
          type="number"
          step="1"
          onChange={this.countUpdate.bind(this)}
          defaultValue="1"
        />
      </div>
    );
  }
}

export default TicketBooking;
