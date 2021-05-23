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

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [meds, setMeds] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddMed = (e) => {
    e.preventDefault();
    setMeds([...meds, e.target[0].value]);
  };

  return (
    <div>
      {console.log(meds)}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        + ADD
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
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
            fullWidth={true}
          />
          <Typography variant="h5">Medications</Typography>
          <ul>
            {meds.map((med, index) => (
              <li key={index}>{med}</li>
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
          <Button type="submit" variant="outlined" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
