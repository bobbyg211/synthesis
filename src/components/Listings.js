import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Listings() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((users) => setUsers(users.data));
  }, []);

  console.log(users);

  return (
    <Container>
      <Typography>
        <ul>
          {users.map((user, index) => (
            <li>
              <Link to={`/listing/${user.id}`}>
                {user.first_name} {user.last_name}
              </Link>
            </li>
          ))}
        </ul>
      </Typography>
    </Container>
  );
}
