import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Events from "./components/Events/Events";
import { BrowserRouter, Route } from "react-router-dom";
import Showingnow from "./components/Movies/Showingnow";
import Comingsoon from "./components/Movies/Comingsoon";

const Routing = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid text-center">
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/movies/showingnow" component={Showingnow}></Route>
        <Route path="/movies/comingsoon" component={Comingsoon}></Route>
        <Route path="/events" component={Events}></Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
