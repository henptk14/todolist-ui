import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/AuthActions";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  gridItem: {
    margin: "1rem",
    textAlign: "center"
  },
  textfield: {
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "60%"
    },
    [theme.breakpoints.up("md")]: {
      width: "40%"
    }
  },
  submitButton: {
    marginRight: "20px",
    marginLeft: "10px"
  }
}));

const Login = props => {
  const classes = useStyle();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginError = useSelector(state => state.security.loginError);
  const validToken = useSelector(state => state.security.validToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (validToken) {
      props.history.push("/main");
    }
  });

  const onChangeHandler = event => {
    const { name, value } = event.target;

    switch (name) {
      case "usernameOrEmail":
        setUsernameOrEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const submitHandler = event => {
    event.preventDefault();

    const loginRequest = {
      usernameOrEmail,
      password
    };
    dispatch(login(loginRequest));
  };

  return (
    <div className={classes.root}>
      <Header />
      <form onSubmit={submitHandler}>
        <Grid container justify="center">
          <Grid
            item
            xs={12}
            className={classes.gridItem}
            style={{ marginTop: "1rem", marginBottom: "0rem" }}
          >
            <Typography variant="h3">Login</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.gridItem}
            style={{ marginTop: "1rem" }}
          >
            <TextField
              id="usernameOrEmail-input"
              name="usernameOrEmail"
              label="Username / Email"
              variant="outlined"
              className={classes.textfield}
              value={usernameOrEmail}
              onChange={onChangeHandler}
              error={!!loginError && !!loginError.username}
              helperText={loginError && loginError.username}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="password-input"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              className={classes.textfield}
              value={password}
              onChange={onChangeHandler}
              error={!!loginError && !!loginError.password}
              helperText={loginError && loginError.password}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.submitButton}
            >
              Login
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
