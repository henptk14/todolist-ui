import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  accountIcon: {
    position: "absolute",
    right: "0px"
  },
  myAccountText: {
    marginLeft: "0.5rem"
  }
}));

function Header(props) {
  const classes = useStyle();

  const { loggedIn } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
          {loggedIn && (
            <IconButton className={classes.accountIcon}>
              <AccountCircle />
              <Typography className={classes.myAccountText}>
                My Account
              </Typography>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
