import React, { createContext, useState } from "react";
import Axios from "axios";

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (todoId, task) => {
    //"https://todolist-boeing-brave-kob.cfapps.io/api/task/"
    try {
      const res = await Axios.post(
        "http://localhost:8080/api/task/" + todoId,
        task
      );
      setTasks([...tasks, res.data]);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      alert("An error add task to todoId: '" + todoId + "'. Check console");
    }
  };

  const removeTask = async taskId => {
    try {
      const res = Axios.delete("http://localhost:8080/api/task/" + taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
      alert("Delete success!");
      console.log(res);
    } catch (err) {
      alert("An error deleting. See console");
      console.log(err);
    }
  };

  const fetchTasks = async todoId => {
    try {
      const res = await Axios.get("http://localhost:8080/api/task/" + todoId);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
      alert(
        "An error fetching tasks for todoId '" + todoId + "'. Check console"
      );
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask, removeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
