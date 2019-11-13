import React from "react";
import Header from "./common/Header";

import "./App.css";
import { Box } from "@material-ui/core";
import TodoContextProvider from "../contexts/TodoContext";
import TodoComponent from "./todo_components/TodoComponent";
import TaskContextProvider from "../contexts/TaskContext";

const App = () => {
  return (
    <React.Fragment>
      <TodoContextProvider>
        <TaskContextProvider>
          <Header />
          <Box display="flex" p={2}>
            <TodoComponent />
          </Box>
        </TaskContextProvider>
      </TodoContextProvider>
    </React.Fragment>
  );
};

export default App;
