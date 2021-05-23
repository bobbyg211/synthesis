import React from "react";
import "./styles.css";
import { Switch, Route, Redirect } from "react-router";
import { CircularProgress } from "@material-ui/core";
import { useIsFetching } from "react-query";
import Navigation from "./components/Navigation";
import Home from "./screens/Home";
import Journals from "./screens/Journals";
import Listings from "./screens/Listings";
import Details from "./screens/Details";

const Router = () => {
  const isFetching = useIsFetching();
  return (
    <div>
      <CircularProgress
        className={isFetching > 0 ? "loader active" : "loader"}
      />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/journals" component={Journals} />
        <Route exact path="/listing" component={Listings} />
        <Route path="/listing/:id" component={Details} />
      </Switch>
    </div>
  );
};

export default Router;
