import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
//import Header from "./common/Header";

import "./App.css";
import LandingPage from "./common/LandingPage";
import Register from "./usermanagement/Register";
import Login from "./usermanagement/Login";
// import { Box } from "@material-ui/core";
// import TodoContextProvider from "../contexts/TodoContext";
// import TodoComponent from "./todo_components/TodoComponent";
// import TaskContextProvider from "../contexts/TaskContext";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </BrowserRouter>
    </React.Fragment>
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
