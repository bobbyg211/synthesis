import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import AddJournal from "../components/AddJournal";
import useJournals from "../hooks/useJournals";
import useDeleteJournal from "../hooks/useDeleteJournal";
import { useAuth0 } from "@auth0/auth0-react";
import useCreateUser from "../../src/hooks/useCreateUser";

export default function Journals() {
  const { user } = useAuth0();
  const [journalId, setJournalId] = useState();
  const { isLoading, isError, data } = useJournals({ user_id: user.sub });
  const deleteJournal = useDeleteJournal({ id: journalId });

  let user_data;
  if (user) {
    user_data = {
      id: user.sub,
      first_name: user.given_name,
      last_name: user.family_name,
    };
  }

  const createUser = useCreateUser(user_data);

  useEffect(() => {
    if (user) {
      createUser.mutate();
    }
  }, []);

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
