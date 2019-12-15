import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Header from "../common/Header";

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

const Register = () => {
  const classes = useStyle();
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const validateInputs = () => {
    !fullName || fullName.length < 2
      ? setFullNameError(true)
      : setFullNameError(false);

    !username || username.length < 4
      ? setUsernameError(true)
      : setUsernameError(false);

    !email ||
    !email.match(
      '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i'
    )
      ? setEmailError(true)
      : setEmailError(false);

    !password || password.length < 8
      ? setPasswordError(true)
      : setPasswordError(false);

    !confirmPassword || confirmPassword !== password
      ? setConfirmPassword(true)
      : setConfirmPassword(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      fullName,
      username,
      email,
      password
    };
  };

  const onChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case "fullName":
        setFullName(value);
        break;

      case "username":
        setUsername(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "confirmPassword":
        setConfirmPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <form onSubmit={handleSubmit}>
        <Grid container justify="center">
          <Grid
            item
            xs={12}
            className={classes.gridItem}
            style={{ marginTop: "1rem", marginBottom: "0rem" }}
          >
            <Typography variant="h3">Register</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            className={classes.gridItem}
            style={{ marginTop: "1rem" }}
          >
            <TextField
              id="fullname-input"
              name="fullName"
              label="Full Name"
              value={fullName}
              variant="outlined"
              className={classes.textfield}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="username-input"
              name="username"
              label="Username"
              value={username}
              variant="outlined"
              className={classes.textfield}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="email-input"
              name="email"
              label="Email"
              value={email}
              type="email"
              variant="outlined"
              className={classes.textfield}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="password-input"
              name="password"
              label="Password"
              value={password}
              variant="outlined"
              type="password"
              className={classes.textfield}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="confirmPassword-input"
              name="confirmPassword"
              label="Confirm Password"
              value={confirmPassword}
              variant="outlined"
              type="password"
              className={classes.textfield}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.submitButton}
            >
              Submit
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

export default Register;
