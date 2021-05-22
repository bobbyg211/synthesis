import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import useCreateUser from "../hooks/useCreateUser";
import useUsers from "../hooks/useUsers";
import axios from "axios";

export default function Form() {
  const createUser = useCreateUser();
  // ============================
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = { firstName, lastName };

    console.log(userData);

    axios.post("/users", userData).then(() => {});
  };

  // ============================
  return (
    <div>
      <form className="add-new-user" onSubmit={onSubmit}>
        <TextField
          required
          onChange={(e) => setFirst(e.target.value)}
          value={firstName}
          name="first"
          label="First Name"
          type="text"
        />
        <TextField
          required
          onChange={(e) => setLast(e.target.value)}
          value={lastName}
          name="last"
          label="Last Name"
          type="text"
        />
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
    </div>
  );
}
