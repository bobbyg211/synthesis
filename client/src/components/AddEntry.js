import React from "react";
import { Button } from "@material-ui/core";
import useCreateEntry from "../hooks/useCreateEntry";

export default function AddEntry(props) {
  const createEntry = useCreateEntry({ journal_id: props.journalID });

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={createEntry.mutate}>
        + ADD
      </Button>
    </div>
  );
}
