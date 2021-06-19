import React from "react";
import { Container, Typography } from "@material-ui/core";
import FormDialog from "../components/FormDialog";
import useJournals from "../../src/hooks/useJournals";
import axios from "axios";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

function test() {
  return "test";
}

export default function Journals() {
  const { isLoading, isError, data } = useQuery("journals", test);

  console.log(data);

  // if (isLoading || isError) {
  //   return null;
  // }

  return (
    <Container>
      <Typography variant="h2">Journals</Typography>
      {/* <ul>
        {data.map((journal, index) => (
          <li key={journal.id}>
            {journal.title} {journal.create_date}
          </li>
        ))}
      </ul> */}
      <FormDialog />
    </Container>
  );
}
