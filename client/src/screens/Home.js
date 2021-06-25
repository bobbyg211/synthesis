import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";

export default function Home() {
  const { user } = useAuth0();

  return (
    <Container>
      <Typography variant="h2">Synthesis</Typography>
      <br></br>
      {user ? (
        <Typography varient="h4" color="primary">
          Welcome back, {user.name}!
        </Typography>
      ) : (
        <Typography varient="h4" color="error">
          Login to view your journals &amp; profile.
        </Typography>
      )}
    </Container>
  );
}
