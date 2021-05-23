import React from "react";
import useUser from "../hooks/useUser";
import useAddress from "../hooks/useAddress";
import { Container, Typography } from "@material-ui/core";

export default function Details(props) {
  const uid = props.match.params.id;
  const {
    isLoading: loadingUser,
    isError: errorUser,
    data: user,
  } = useUser(uid);
  const {
    isLoading: loadingAddress,
    isError: errorAddress,
    data: address,
  } = useAddress(uid);

  if (loadingAddress || loadingUser || errorAddress || errorUser) {
    return null;
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
