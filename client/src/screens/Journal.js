import React from "react";
import { Container, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
        <Link class="back-to" to={`/journals/`}>
          <ArrowBackIcon /> Back to all journals
        </Link>
      </Typography>
      <Typography className="title" variant="h4">
        {journalData.title}
      </Typography>
      <Typography className="date" variant="h5">
        {formatDate(journalData.create_date)}
      </Typography>
      <AddEntry journalID={id} />

      <ul className="entries-wrapper">
        {entriesData.map((entry, index) => (
          <li className="entry item-bar" key={entry.id}>
            <Typography>{formatDate(entry.create_date)}</Typography>
            <div class="editor-icons">
              <Link className="edit" to={`/journals/${id}/entry/${entry.id}`}>
                <CreateIcon></CreateIcon>
              </Link>
              <Link className="delete">
                <DeleteIcon></DeleteIcon>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
