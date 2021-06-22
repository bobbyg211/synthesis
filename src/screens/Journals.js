import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddJournal from "../components/AddJournal";
import useJournals from "../../src/hooks/useJournals";

export default function Journals() {
  const { isLoading, isError, data } = useJournals();

  if (isLoading || isError) {
    return null;
  }

  return (
    <Container>
      <Typography variant="h2">Journals</Typography>
      <ul>
        {data.map((journal, index) => (
          <li key={journal.id}>
            <Link to={`/journals/${journal.id}`}>
              {journal.title} {journal.create_date}
            </Link>
          </li>
        ))}
      </ul>
      <AddJournal />
    </Container>
  );
}
