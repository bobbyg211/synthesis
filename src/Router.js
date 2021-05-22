import React from "react";
import "./styles.css";
import { Switch, Route, Redirect } from "react-router";
import Listings from "./components/Listings";
import Details from "./components/Details";
import { CircularProgress } from "@material-ui/core";
import { useIsFetching } from "react-query";

const Router = () => {
  const isFetching = useIsFetching();
  return (
    <div>
      <CircularProgress
        className={isFetching > 0 ? "loader active" : "loader"}
      />
      <Switch>
        <Route exact path="/listing" component={Listings} />
        <Route path="/listing/:id" component={Details} />
        <Redirect from="/" to="/listing"></Redirect>
      </Switch>
    </div>
  );
};

export default Router;
