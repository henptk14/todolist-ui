import React, { useContext, useReducer, createContext } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./common/LandingPage";
import Register from "./usermanagement/Register";
import Login from "./usermanagement/Login";
import UserContextProvider from "../contexts/UserContext";

const AppContext = createContext();

const securityReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":

    default:
      break;
  }
};

const App = () => {
  const [securityStore, securityDispatch] = useReducer(securityReducer, {
    user: {},
    validToken: false,
    userErrors: {}
  });

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </UserContextProvider>
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
