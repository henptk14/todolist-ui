import React from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";

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
  }
}));

const Register = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
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
              variant="outlined"
              type="email"
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
        </Grid>
      </form>
    </div>
  );
};

export default Register;
