import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useJournal from "../../src/hooks/useJournal";
import useEntries from "../../src/hooks/useEntries";
import AddEntry from "../components/AddEntry";

export default function Journal(props) {
  const id = props.match.params.id;
  const {
    isLoading: journalIsLoading,
    isError: journalIsError,
    data: journalData,
  } = useJournal(id);
  const {
    isLoading: entriesIsLoading,
    isError: entiresIsError,
    data: entriesData,
  } = useEntries(id);

  if (
    journalIsLoading ||
    journalIsError ||
    entriesIsLoading ||
    entiresIsError
  ) {
    return null;
  }

  return (
    <Container className="journal" maxWidth="sm">
      <Link to={`/journals/`}>Back to all journals</Link>
      <Typography variant="h4">{journalData.title}</Typography>
      <Typography variant="h5">{journalData.create_date}</Typography>
      <AddEntry journalID={id} />

      <ul>
        {entriesData.map((entry, index) => (
          <li key={entry.id}>
            <Link to={`/journals/${id}/entry/${entry.id}`}>
              {entry.create_date}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
