import React from "react";
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

  return (
    <div className={classes.root}>
      <Header />
      <form>
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
              variant="outlined"
              className={classes.textfield}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="username-input"
              name="username"
              label="Username"
              variant="outlined"
              className={classes.textfield}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="email-input"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              className={classes.textfield}
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
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="confirmPassword-input"
              name="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              type="password"
              className={classes.textfield}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Button
              variant="contained"
              color="primary"
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
