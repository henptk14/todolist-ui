import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/AuthActions";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  accountIcon: {
    marginLeft: "auto",
    marginRight: -12
  }
}));

function Header(props) {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const menuItemOpen = Boolean(anchorEl);

  const dispatch = useDispatch();
  const loggedIn = localStorage.getItem("jwtToken");

  const handleAccountIconClicked = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
          {loggedIn && (
            <div className={classes.accountIcon}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleAccountIconClicked}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={menuItemOpen}
                onClose={handleMenuClose}
              >
                <MenuItem>My Account</MenuItem>
                <MenuItem onClick={() => dispatch(logout())}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
