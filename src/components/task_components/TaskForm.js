import React, { useContext, useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { TaskContext } from "../../contexts/TaskContext";

const TaskForm = props => {
  const { addTask } = useContext(TaskContext);
  const [taskDescription, setTaskDescription] = useState("");
  const { todo } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addTask(todo.id, { taskDescription });
    setTaskDescription("");
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container alignItems="center">
        <Grid item>
          <TextField
            required
            label="Add Task"
            value={taskDescription}
            margin="normal"
            onChange={event => setTaskDescription(event.target.value)}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;
