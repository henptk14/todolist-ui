import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  container: {
    marginTop: "20px",
    textAlign: "center"
  }
}));

const LandingPage = () => {
  const classes = useStyle();

  return (
    <>
      <Header loggedIn={true} />
      <Container className={classes.container}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Typography variant="h2" component="h5">
              Welcome to Todolist
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/login">
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "20px" }}
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="contained" color="secondary">
                Sign Up
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
