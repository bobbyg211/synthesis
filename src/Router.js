import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router";
import ProtectedRoute from "./auth/ProtectedRoute";
import { CircularProgress } from "@material-ui/core";
import { useIsFetching } from "react-query";
import Navigation from "./components/Navigation";
import Home from "./screens/Home";
import Journals from "./screens/Journals";
import Journal from "./screens/Journal";
import Entry from "./screens/Entry";
import Profile from "./screens/Profile";
import ExternalAPI from "./screens/ExternalAPI";

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
        <Route exact path="/journals/:id" component={Journal} />
        <Route exact path="/journals/:jid/entry/:eid" component={Entry} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/external-api" component={ExternalAPI} />
      </Switch>
    </div>
  );
};

export default Router;
