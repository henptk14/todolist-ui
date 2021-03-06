import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Header from "../common/Header";
import SnackbarWrapper from "../styled_component/SnackbarWrapper";
import { useSelector, useDispatch } from "react-redux";
import { registerNewUser } from "../../actions/AuthActions";

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

const Register = props => {
  const classes = useStyle();
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [openErrorSnackbar, setErrorOpenSnackbar] = useState(false);

  const registerError = useSelector(state => state.security.registerError);
  const validToken = useSelector(state => state.security.validToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (validToken) {
      props.history.push("/main");
    }
  });

  // will return TRUE for INVALID. Will return FALSE for VALID
  const validateInputs = () => {
    return (
      !!fullNameError ||
      !!usernameError ||
      !!emailError ||
      !!passwordError ||
      !!confirmPasswordError
    );
  };

  const handleSubmit = event => {
    event.preventDefault();

    const invalid = validateInputs();
    if (invalid) {
      setErrorOpenSnackbar(true);
    } else {
      setErrorOpenSnackbar(false);

      const user = {
        fullName,
        username,
        email,
        password,
        confirmPassword
      };
      dispatch(registerNewUser(user, props.history));
      registerError ? setErrorOpenSnackbar(true) : setErrorOpenSnackbar(false);
    }
  };

  const onBlur = event => {
    const { name } = event.target;

    switch (name) {
      case "fullName":
        setFullNameError(
          !fullName || fullName.length < 2
            ? "Full name must have at least 2 letters"
            : ""
        );
        break;

      case "username":
        setUsernameError(
          !username || username.length < 4
            ? "Username must have at least 4 letters"
            : ""
        );
        break;

      case "email":
        setEmailError(
          !email ||
            !email.match(
              // prettier-ignore
              // eslint-disable-next-line no-useless-escape
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            ? "Invalid email format"
            : ""
        );
        break;

      case "password":
        setPasswordError(
          !password || password.length < 8
            ? "Password must be more than 8 characters"
            : ""
        );
        break;

      case "confirmPassword":
        setConfirmPasswordError(
          !confirmPassword || confirmPassword !== password
            ? "Not matching password"
            : ""
        );
        break;

      default:
        break;
    }
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

  const errorSnackbarOnCloseHandler = () => {
    setErrorOpenSnackbar(false);
  };

  return (
    <div className={classes.root}>
      <Header />
      <SnackbarWrapper
        open={openErrorSnackbar}
        message={"There is an error"}
        onClose={errorSnackbarOnCloseHandler}
      />
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
              onBlur={onBlur}
              error={!!fullNameError || !!registerError.fullName}
              required
              helperText={
                registerError.fullName ? registerError.fullName : fullNameError
              }
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
              onBlur={onBlur}
              error={!!usernameError || !!registerError.username}
              helperText={
                registerError.username ? registerError.username : usernameError
              }
              required
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="email-input"
              name="email"
              label="Email"
              value={email}
              variant="outlined"
              className={classes.textfield}
              onChange={onChange}
              onBlur={onBlur}
              error={!!emailError || !!registerError.email}
              helperText={
                registerError.email ? registerError.email : emailError
              }
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
              onBlur={onBlur}
              error={!!passwordError || !!registerError.password}
              helperText={
                registerError.password ? registerError.password : passwordError
              }
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
              onBlur={onBlur}
              error={!!confirmPasswordError || !!registerError.confirmPassword}
              helperText={
                registerError.confirmPassword
                  ? registerError.confirmPassword
                  : confirmPasswordError
              }
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
