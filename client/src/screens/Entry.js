import React from "react";
import { Container, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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

  function formatDate(date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var d = new Date(date),
      day = "" + days[d.getDay()],
      month = "" + months[d.getMonth() + 1],
      date = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (date.length < 2) date = "0" + date;

    return `${day}, ${month} ${date}, ${year}`;
  }

  return (
    <Container className="journal" maxWidth="sm">
      <Typography>
        <Link class="back-to" to={`/journals/${jid}`}>
          <ArrowBackIcon /> Back to all entries
        </Link>
      </Typography>
      <Typography variant="h4">{formatDate(entryData.create_date)}</Typography>
      <ul className="notes-wrapper">
        {notesData.map((note, index) => (
          <li className="note" key={note.id}>
            <Typography className="title" variant="h6">
              {note.title}
            </Typography>
            <Typography>{note.description}</Typography>
          </li>
        ))}
      </ul>

      <AddNote entryID={eid} />
    </Container>
  );
}
