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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/AuthActions";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
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
  // const loggedIn = localStorage.getItem("jwtToken");
  const loggedIn = useSelector(state => state.security.validToken);

  const handleAccountIconClicked = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
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
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
