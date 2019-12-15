import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, TextField, Container } from "@material-ui/core";
import Header from "../common/Header";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {}
}));

const Login = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Header />
      <Container>
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
      </Container>
    </div>
  );
};

export default Login;
