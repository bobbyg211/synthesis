import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../public/images/synthesis-logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "./AuthenticationButton";

export default function Navigation() {
  const { user } = useAuth0();

  return (
    <AppBar position="relative" className="navigation">
      <Toolbar>
        <Link to="/" className="company">
          <img className="logo" src={logo} alt=""></img>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Synthesis
          </Typography>
        </Link>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          {user && (
            <li className="nav-list-item">
              <Link to="/journals">Journals</Link>
            </li>
          )}
          <li className="nav-list-item">
            <AuthenticationButton />
          </li>
          {user && (
            <li className="nav-list-item profile">
              <Link to="/profile">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                />
              </Link>
            </li>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
}
