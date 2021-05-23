import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../public/images/synthesis-logo.svg";

export default function Navigation() {
  return (
    <AppBar position="relative" className="navigation">
      <Toolbar>
        <img className="logo" src={logo} alt=""></img>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Synthesis
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/journals">Journals</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/listing">Listing</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
}
