import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./common/LandingPage";
import Register from "./usermanagement/Register";
import Login from "./usermanagement/Login";
import setJWTToken from "./securityutils/setJWTToken";
import jwt_decode from "jwt-decode";

import { LOGIN } from "../actions/actionConstants";
import { logout } from "../actions/AuthActions";
import { store } from "../store";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded = jwt_decode(jwtToken);
  store.dispatch({
    type: LOGIN,
    payload: decoded
  });

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default App;

// /* <TodoContextProvider>
//       <TaskContextProvider>
//         <Header />
//         <Box display="flex" p={2}>
//           <TodoComponent />
//         </Box>
//       </TaskContextProvider>
//     </TodoContextProvider> */
