import React, { useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import useCreateUser from "../../src/hooks/useCreateUser";

export default function Home() {
  const { user } = useAuth0();
  let data;
  if (user) {
    data = {
      id: user.sub,
      first_name: user.given_name,
      last_name: user.family_name,
    };
  }

  const createUser = useCreateUser(data);

  useEffect(() => {
    if (user) {
      createUser.mutate();
    }
  }, []);

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
