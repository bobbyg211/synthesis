import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useQueryClient, useMutation } from "react-query";
import useCreateUser from "../hooks/useCreateUser";
import useUsers from "../hooks/useUsers";
import axios from "axios";

export default function Form() {
  const queryClient = useQueryClient();

  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");

  const mutation = useMutation(
    (e) => {
      e.preventDefault();
      return axios
        .post("/users", new FormData(e.target))
        .then((res) => res.data);
    },
    {
      onSuccess: (newUser) => {
        console.log(newUser);
        queryClient.setQueryData("users", (currentUsers) => [
          ...currentUsers,
          newUser,
        ]);
        // queryClient.invalidateQueries("users");
      },
    }
  );

  return (
    <div>
      <form className="add-new-user" onSubmit={mutation.mutate}>
        <TextField
          required
          onChange={(e) => setFirst(e.target.value)}
          value={firstName}
          name="firstName"
          label="First Name"
          type="text"
        />
        <TextField
          required
          onChange={(e) => setLast(e.target.value)}
          value={lastName}
          name="lastName"
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
