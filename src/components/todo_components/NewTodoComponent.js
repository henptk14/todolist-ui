import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import {
  makeStyles,
  Typography,
  SnackbarContent,
  IconButton,
  Snackbar
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import { getAllTodo, addTodo, removeTodo } from "../../actions/TodoActions";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "10px",
    textAlign: "center"
  },
  snackbar: {
    marginTop: "50px",
    backgroundColor: "green"
  },
  snackbarMessage: {
    display: "flex",
    alignItems: "center"
  }
}));

const NewTodoComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoReducer.todos);

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  const handleFormSubmit = todo => {
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = todoIdAndIndex => {
    dispatch(removeTodo(todoIdAndIndex));
  };

  return (
    <>
      <div className={classes.container}>
        <TodoForm handleTodoSubmit={handleFormSubmit} />
        {todos && todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              index={index}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))
        ) : (
          <Typography variant="body1" component="p">
            No Todo Yet!
          </Typography>
        )}
      </div>
    </>
  );
};

export default NewTodoComponent;
