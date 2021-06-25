import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import AddJournal from "../components/AddJournal";
import useJournals from "../hooks/useJournals";
import useDeleteJournal from "../hooks/useDeleteJournal";

export default function Journals() {
  const [journalId, setJournalId] = useState();
  const { isLoading, isError, data } = useJournals();
  const deleteJournal = useDeleteJournal({ id: journalId });

  if (isLoading || isError) {
    return null;
  }

  return (
    <Container>
      <Typography variant="h2">Journals</Typography>
      <ul className="journals-wrapper">
        {data.map((journal, index) => (
          <li className="journal item-bar" key={journal.id}>
            <Typography>{journal.title}</Typography>
            <div class="editor-icons">
              <Link className="edit" to={`/journals/${journal.id}`}>
                <CreateIcon></CreateIcon>
              </Link>
              <Link
                className="delete"
                onClick={() => {
                  setJournalId(journal.id);
                  deleteJournal.mutate();
                }}
              >
                <DeleteIcon></DeleteIcon>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <AddJournal />
    </Container>
  );
}
