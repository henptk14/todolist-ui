import React from "react";
import {
  Card,
  makeStyles,
  CardContent,
  CardHeader,
  IconButton
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  card: {
    width: "80%",
    display: "inline-block"
  }
}));

const TodoCard = props => {
  const classes = useStyles();
  const { todoTitle, id } = props.todo;
  const { handleDeleteTodo, index } = props;

  const handleDeleteClick = () => {
    handleDeleteTodo({ id, index });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <CardHeader
          title={todoTitle}
          action={
            <IconButton onClick={handleDeleteClick}>
              <DeleteForeverIcon />
            </IconButton>
          }
        />
      </CardContent>
    </Card>
  );
};

TodoCard.propTypes = {
  todo: PropTypes.object.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default TodoCard;
