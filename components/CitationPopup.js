import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const CitationPopup = ({
  open,
  handleClose,
  handleGenerateCitations,
  selectedOption
}) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleGenerateClick = () => {
    handleGenerateCitations();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{`Generate ${selectedOption} Citation`}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="User Input"
          fullWidth
          value={userInput}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleGenerateClick} color="primary">
          Generate
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CitationPopup;
