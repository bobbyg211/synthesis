import React from "react";
import { TextField, Button } from "@material-ui/core";
import useCreateUser from "../../src/hooks/useCreateUser";

export default function Form() {
  const createUser = useCreateUser();

  return (
    <div>
      <form className="add-new-user" onSubmit={createUser.mutate}>
        <TextField required name="firstName" label="First Name" type="text" />
        <TextField required name="lastName" label="Last Name" type="text" />
        <TextField required name="email" label="Email" type="email" />
        <Button type="submit" variant="contained" color="primary">
          {createUser.isLoading
            ? "Saving..."
            : createUser.isError
            ? "Error!"
            : createUser.isSuccess
            ? "Saved!"
            : "Add User"}
        </Button>
      </form>
    </div>
  );
}
