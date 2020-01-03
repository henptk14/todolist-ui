import React, { useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";

const useStyle = makeStyles(theme => ({
  container: {
    marginTop: "20px",
    textAlign: "center"
  }
}));

const LandingPage = props => {
  const classes = useStyle();
  const validToken = useSelector(state => state.security.validToken);

  useEffect(() => {
    if (validToken) {
      props.history.push("/main");
    }
  });
  console.log("env", process.env.REACT_APP_API_ENDPOINT);

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
