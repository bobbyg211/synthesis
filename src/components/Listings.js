import React from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import useUsers from "../hooks/useUsers";

function Listings() {
  const { isLoading, isError, data, error } = useUsers();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Container>
      <ul>
        {data.map((user, index) => (
          <li key={user.id}>
            <Link to={`/listing/${user.id}`}>
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Listings;
