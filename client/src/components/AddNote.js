import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import useCreateNote from "../hooks/useCreateNote";

export default function AddJournal(props) {
  const eid = props.entryID;
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const createNote = useCreateNote({
    title: title,
    description: description,
    entry_id: eid,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {!open && (
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          + ADD NOTE
        </Button>
      )}
      {open && (
        <form
          className="add-note"
          onSubmit={() => {
            createNote.mutate();
            setOpen(false);
          }}
        >
          <TextField
            required
            name="title"
            label="Title"
            fullWidth={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            required
            id="outlined-multiline-static"
            name="description"
            label="Description"
            multiline
            rows={4}
            fullWidth={true}
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit" variant="outlined" color="primary">
            Submit
          </Button>
        </form>
      )}
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="form-dialog"
      >
        <DialogTitle id="form-dialog-title">Create Journal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give your new journal a name and add your medications.
          </DialogContentText>
          <TextField
            required
            name="journalName"
            label="Journal Name"
            onChange={(e) => setTitle(e.target.value)}
            fullWidth={true}
          />
          <Typography variant="h5">Medications</Typography>
          <ul className="med-list">
            {meds.map((med, index) => (
              <li key={index}>
                <Chip
                  label={med}
                  onDelete={handleDelete(med)}
                  color="primary"
                />
              </li>
            ))}
          </ul>
          <form className="add-med" onSubmit={handleAddMed}>
            <TextField
              required
              name="medicationName"
              label="Medication Name"
              fullWidth={true}
            />
            <Button type="submit" variant="outlined" color="primary">
              + ADD
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              createJournal.mutate();
              if (title) {
                handleClose();
              }
              setTitle();
            }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
