import React from "react";
import Header from "./Header";
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Drawer,
  Typography
} from "@material-ui/core";
import NewTodoComponent from "../todo_components/NewTodoComponent";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  drawer: {
    [theme.breakpoints.between("md", "lg")]: {
      width: 400
    },
    [theme.breakpoints.between("lg", "xl")]: {
      width: 500
    },
    [theme.breakpoints.up("xl")]: {
      width: 850
    },
    backgroundColor: theme.palette.background.default
  },
  content: {
    padding: theme.spacing(3),
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}));

const MainPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdBreakPoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          className={classes.drawer}
          classes={{
            paper: classes.drawer
          }}
          anchor={mdBreakPoint ? "left" : "top"}
        >
          <div className={classes.toolbar} />
          <NewTodoComponent />
        </Drawer>
        <main className={classes.content}>
          <Typography>This is task component section</Typography>
        </main>
      </div>
    </div>
  );
};

export default MainPage;
