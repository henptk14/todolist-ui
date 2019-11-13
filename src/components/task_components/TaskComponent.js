import React, { useContext } from "react";
import {
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskForm from "./TaskForm";
import { TaskContext } from "../../contexts/TaskContext";
import { taskStyles } from "./TaskStyles";

const TaskComponent = props => {
  const { selectedTodo } = props;
  const { tasks, removeTask } = useContext(TaskContext);

  const classes = taskStyles();

  return (
    <Grid direction="column" container justify="center" alignItems="center">
      <Grid item>
        <TaskForm todo={selectedTodo} />
      </Grid>

      <Grid item className={classes.taskList}>
        {tasks.length ? (
          <List
            subheader={
              <ListSubheader>
                Task List for {selectedTodo.todoTitle}
              </ListSubheader>
            }
          >
            {tasks.map(task => (
              <ListItem button key={task.id}>
                <ListItemText primary={task.taskDescription} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeTask(task.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        ) : (
          <div>No tasks yet for {selectedTodo.todoTitle}</div>
        )}
      </Grid>
    </Grid>
  );
};

export default TaskComponent;
