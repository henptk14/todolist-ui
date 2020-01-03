import React, { useState } from "react";
import {
  Card,
  TextField,
  InputAdornment,
  IconButton,
  makeStyles,
  CardActions
} from "@material-ui/core";
import PropTypes from "prop-types";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles(theme => ({
  card: {
    width: "80%",
    display: "inline-block"
  },
  form: {
    width: "90%"
  },
  textfield: {
    width: "90%"
  }
}));

const TodoForm = props => {
  const classes = useStyles();
  const [todoTitle, setTodoTitle] = useState("");
  const { handleTodoSubmit } = props;

  const handleTodoInputChange = event => {
    setTodoTitle(event.target.value);
  };

  const handleHighlightOffIconClick = () => {
    setTodoTitle("");
  };

  const getInputAdornment = () => (
    <InputAdornment position="end">
      <IconButton
        aria-label="Cancel Todo Title Input"
        edge="end"
        onClick={handleHighlightOffIconClick}
      >
        <HighlightOffIcon color="action" />
      </IconButton>
    </InputAdornment>
  );

  const handleSubmit = event => {
    event.preventDefault();
    if (todoTitle) {
      const todo = {
        todoTitle
      };
      handleTodoSubmit(todo);
      setTodoTitle("");
    }
  };

  return (
    <Card raised className={classes.card}>
      <CardActions disableSpacing>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="todo-input"
            className={classes.textfield}
            name="todoTitle"
            placeholder="Add todo"
            value={todoTitle}
            onChange={handleTodoInputChange}
            variant="standard"
            InputProps={{ endAdornment: getInputAdornment() }}
          />
        </form>
      </CardActions>
    </Card>
  );
};

TodoForm.propTypes = {
  handleTodoSubmit: PropTypes.func.isRequired
};

export default TodoForm;
