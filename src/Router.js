import React from "react";
import { Switch, Route } from "react-router";
import Listings from "./components/Listings";
import Details from "./components/Details";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Listings} />
      <Route path="/listing/:id" component={Details} />
    </Switch>
  );
};

export default Router;
