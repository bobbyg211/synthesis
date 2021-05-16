import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@material-ui/core";

export default function Details(props) {
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    axios.get(`/users/${id}`).then((user) => setUser(user.data[0]));
    axios
      .get(`/users/address/${id}`)
      .then((address) => setAddress(address.data[0]));
  }, []);

  return (
    <Container className="details" maxWidth="sm">
      <Typography variant="h4">
        {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="h5">{address.address}</Typography>
    </Container>
  );
}
