import { makeStyles } from "@material-ui/styles";
import { width } from "@material-ui/system";

export const todoStyles = makeStyles(theme => ({
  todoList: {
    flexGrow: 2,
    width: "50%"
  },

  taskPaper: {
    minHeight: "200px"
  },

  selectATodo: {
    alignItems: "center",
    textAlign: "center"
  }
}));
