import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //http://localhost:8080/
    //"https://todolist-boeing-brave-kob.cfapps.io/api/task/"
    Axios.get("http://localhost:8080/api/todo/all").then(res =>
      setTodos(res.data)
    );
  }, []);

  const fetchTodos = async () => {
    const res = await Axios.get("http://localhost:8080/api/todo/all");

    setTodos(res.data);
  };

  const addTodo = async todo => {
    try {
      const res = await Axios.post("http://localhost:8080/api/todo", todo);
      setTodos([...todos, res.data]);
    } catch (error) {
      console.log(error);

      alert("Add todo incomplete. There is an error, see console");
    }
  };

  const removeTodo = async todoId => {
    try {
      const res = await Axios.delete(
        "http://localhost:8080/api/todo/" + todoId
      );
      setTodos(todos.filter(todo => todo.id !== todoId));
      alert("Delete success!");
      console.log(res);
    } catch (error) {
      alert("An error deleting. See console");
      console.log(error);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, fetchTodos, addTodo, removeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
