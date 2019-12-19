import React from "react";
import PropTypes from "prop-types";
import { Error, Close } from "@material-ui/icons";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
  makeStyles
} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  snackbarContent: {
    backgroundColor: theme.palette.error.dark
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

const SnackbarWrapper = props => {
  const classes = useStyle();
  const { open, message, onClose } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={open}
      onClose={onClose}
    >
      <SnackbarContent
        className={classes.snackbarContent}
        message={
          <span className={classes.message}>
            <Error style={{ fontSize: "20px", marginRight: "2px" }} />
            {message}
          </span>
        }
        action={[
          <IconButton key="close" onClick={onClose}>
            <Close style={{ fontSize: "20px" }} />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

SnackbarWrapper.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func
};

export default SnackbarWrapper;
