import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  IconButton,
  Slide,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AppDialog = ({ openDialog, message, onClose }) => {
  const [open, setOpen] = useState(openDialog);

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const handleCloseDialog = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <BootstrapDialog
      onClose={handleCloseDialog}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Message
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleCloseDialog}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>{message}</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCloseDialog}>
          Close
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default AppDialog;
