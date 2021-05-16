import React from "react";
import { Container, Typography } from "@material-ui/core";

export default function Details(props) {
  const id = props.match.params.id;
  const listing = props.listings.find((listing) => listing.id == id);

  return (
    <Container className="details" maxWidth="sm">
      <Typography variant="h4">{listing.name}</Typography>
      <Typography variant="h5">{listing.address}</Typography>
      <Typography variant="h5">{listing.hours}</Typography>
      <Typography variant="body1">{listing.description}</Typography>
    </Container>
  );
}
