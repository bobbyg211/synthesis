import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useEntry from "../../src/hooks/useEntry";
import useNotes from "../../src/hooks/useNotes";
import AddNote from "../components/AddNote";

export default function Entry(props) {
  const jid = props.match.params.jid;
  const eid = props.match.params.eid;
  const {
    isLoading: entryIsLoading,
    isError: entryIsError,
    data: entryData,
  } = useEntry(jid, eid);
  const {
    isLoading: notesIsLoading,
    isError: notesIsError,
    data: notesData,
  } = useNotes(eid);

  if (entryIsLoading || entryIsError || notesIsLoading || notesIsError) {
    return null;
  }

  return (
    <Container className="journal" maxWidth="sm">
      <Link to={`/journals/${jid}`}>Back to all entries</Link>
      <Typography variant="h4">{entryData.create_date}</Typography>
      <ul>
        {notesData.map((note, index) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </li>
        ))}
      </ul>

      <AddNote entryID={eid} />
    </Container>
  );
}
