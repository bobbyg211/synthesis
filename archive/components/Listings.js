import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Form from "./Form";
import useUsers from "../../src/hooks/useUsers";

function Listings() {
  const { isLoading, isError, data } = useUsers();

  if (isLoading || isError) {
    return null;
  }

  return (
    <Container>
      <Typography variant="h3">USERS</Typography>
      <ul>
        {data.map((user, index) => (
          <li key={user.id}>
            <Link to={`/listing/${user.id}`}>
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
      <Form />
    </Container>
  );
}

export default Listings;
