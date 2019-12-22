import React, { createContext } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./common/LandingPage";
import Register from "./usermanagement/Register";
import Login from "./usermanagement/Login";

export const AppContext = createContext();

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
