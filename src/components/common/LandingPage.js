import React from "react";
import Header from "./Header";
import Register from "../usermanagement/Register";
import { Container } from "@material-ui/core";

const LandingPage = () => {
  return (
    <>
      <Header loggedIn={true} />
      <Container maxWidth="xl">
        <Register />
      </Container>
    </>
  );
};

export default LandingPage;
