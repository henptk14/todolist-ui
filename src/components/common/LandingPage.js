import React from "react";
import Header from "./Header";
import { Typography, Container } from "@material-ui/core";
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
        <Typography variant="h2" component="h5">
          Welcome to Todolist
        </Typography>
      </Container>
    </>
  );
};

export default LandingPage;
