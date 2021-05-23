import React from "react";
import { Container, Typography } from "@material-ui/core";
import useUsers from "../../src/hooks/useUsers";

export default function Home() {
  const { isLoading, isError, data } = useUsers();

  if (isLoading || isError) {
    return null;
  }

  console.log(data);

  return (
    <Container>
      <Typography variant="h2">Synthesis</Typography>
      <ul>
        {data.map((user, index) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </Container>
  );
}
