import React, { useContext, useState } from "react";
import {
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import TodoForm from "./TodoForm";
import { TodoContext } from "../../contexts/TodoContext";
import { TaskContext } from "../../contexts/TaskContext";
import TaskComponent from "../task_components/TaskComponent";
import { todoStyles } from "./TodoStyles";

const TodoComponent = () => {
  const { todos, removeTodo } = useContext(TodoContext);
  const { fetchTasks } = useContext(TaskContext);
  const [selectedTodo, setSelectedTodo] = useState();
  const classes = todoStyles();

  return (
    <div className={classes.todoList}>
      <Grid container justify="center" spacing={3} alignItems="center">
        {/* Todo grid starts here */}
        <Grid item xs={5}>
          <Paper>
            <Grid
              direction="column"
              container
              justify="center"
              alignItems="center"
            >
              <Grid item md>
                <TodoForm />
              </Grid>

              <Grid item className={classes.todoList}>
                {todos.length ? (
                  <List subheader={<ListSubheader>Todo List</ListSubheader>}>
                    {todos.map(todo => (
                      <ListItem
                        button
                        key={todo.id}
                        onClick={() => {
                          fetchTasks(todo.id);
                          setSelectedTodo(todo);
                        }}
                      >
                        <ListItemText primary={todo.todoTitle} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              removeTodo(todo.id);
                              setSelectedTodo();
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <div>No Todo yet</div>
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Todo grid ends here */}

        {/* Task grid starts here */}
        <Grid item xs={5}>
          <Paper className={classes.taskPaper}>
            {selectedTodo ? (
              <TaskComponent selectedTodo={selectedTodo} />
            ) : (
              <div className={classes.selectATodo}>Select a todo</div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoComponent;
