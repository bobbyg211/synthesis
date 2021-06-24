import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import { useAuth0 } from "@auth0/auth0-react";
import useCreateJournal from "../hooks/useCreateJournal";

export default function AddJournal() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [meds, setMeds] = useState([]);
  const { user } = useAuth0();
  const createJournal = useCreateJournal({ title: title, user_id: user.sub });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMeds([]);
  };

  const handleAddMed = (e) => {
    e.preventDefault();
    setMeds([...meds, e.target[0].value]);
    document.querySelector(".add-med input").value = "";
  };

  const handleDelete = (med) => () => {
    setMeds((meds) => meds.filter((meds) => meds !== med));
  };

  const handleCreate = (title, meds) => () => {
    const journalObj = {
      title: title,
      user_id: "",
    };

    console.log(journalObj);

    for (let med of meds) {
      const medicationObj = {
        medication: med,
        journal_id: "",
      };

      console.log(medicationObj);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        + ADD
      </Button>
      <Dialog
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
      </Dialog>
    </div>
  );
}
