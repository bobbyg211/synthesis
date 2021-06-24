import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <LoginButton />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
