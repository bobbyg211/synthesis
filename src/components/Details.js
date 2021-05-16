import React from "react";
import useUser from "../hooks/useUser";
import useAddress from "../hooks/useAddress";
import { Container, Typography } from "@material-ui/core";

export default function Details(props) {
  const id = props.match.params.id;
  const {
    isLoading: loadingAddress,
    isError: errorAddress,
    data: address,
  } = useAddress(id);
  const {
    isLoading: loadingUser,
    isError: errorUser,
    data: user,
  } = useUser(id);

  if (loadingAddress || loadingUser) {
    return <span>Loading...</span>;
  }

  if (errorAddress || errorUser) {
    return <span>Error</span>;
  }

  return (
    <Container className="details" maxWidth="sm">
      <Typography variant="h4">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="h5">{address.street}</Typography>
    </Container>
  );
}
