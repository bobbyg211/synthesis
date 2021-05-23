import React from "react";
import { Container, Typography } from "@material-ui/core";
import FormDialog from "../components/FormDialog";

export default function Journals() {
  return (
    <Container>
      <Typography variant="h2">Journals</Typography>
      <FormDialog />
    </Container>
  );
}
