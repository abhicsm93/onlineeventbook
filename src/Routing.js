import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Events from "./components/Events/Events";
import { BrowserRouter, Route } from "react-router-dom";
import Showingnow from "./components/Movies/Showingnow";
import Comingsoon from "./components/Movies/Comingsoon";
import TicketBooking from "./components/TicketBooking/TicketBooking";
import Details from "./components/Movies/Details";

const Routing = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid text-center">
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/movies/showingnow" component={Showingnow}></Route>
        <Route path="/movies/comingsoon" component={Comingsoon}></Route>
        <Route path="/showingnow/details/:id" component={Details}></Route>
        <Route path="/comingsoon/details/:id" component={Details}></Route>
        <Route path="/ticketbooking" component={TicketBooking}></Route>
        <Route path="/events" component={Events}></Route>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
