import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import AddJournal from "../components/AddJournal";
import useJournals from "../hooks/useJournals";
import useDeleteJournal from "../hooks/useDeleteJournal";
import { useAuth0 } from "@auth0/auth0-react";

export default function Journals() {
  const { user } = useAuth0();
  const [journalId, setJournalId] = useState();
  const { isLoading, isError, data } = useJournals({ user_id: user.sub });
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
            </div>
          </li>
        ))}
      </ul>
      <AddJournal />
    </Container>
  );
}
