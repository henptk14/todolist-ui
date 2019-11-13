import React, { useContext, useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { TodoContext } from "../../contexts/TodoContext";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoTitle, setTodoTitle] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    addTodo({ todoTitle });
    setTodoTitle("");
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs>
          <TextField
            required
            value={todoTitle}
            label="Add Todo"
            margin="normal"
            onChange={event => setTodoTitle(event.target.value)}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoForm;
