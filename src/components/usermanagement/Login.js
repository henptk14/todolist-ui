import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, TextField } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Login = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <form>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography variant="h3">Login</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="usernameOrEmail-input"
              name="usernameOrEmail"
              label="Username / Email"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
