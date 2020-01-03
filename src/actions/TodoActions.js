import Axios from "axios";
import { todoApiEndpoints } from "../endpoints/endpoints";
import {
  POST_TODO,
  TODO_ERROR,
  FETCH_TODO,
  UPDATE_TODO,
  REMOVE_TODO
} from "./actionConstants";

export const addTodo = todo => async dispatch => {
  try {
    const response = await Axios.post(todoApiEndpoints.addTodo, todo);
    dispatch({
      type: POST_TODO,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: error.response.data
    });
  }
};

export const getAllTodo = () => async dispatch => {
  const response = await Axios.get(todoApiEndpoints.fetchAllTodos);

  dispatch({
    type: FETCH_TODO,
    payload: response.data
  });
};

export const updateTodo = todo => async dispatch => {
  try {
    const response = await Axios.patch(todoApiEndpoints.updateTodo, todo);

    dispatch({
      type: UPDATE_TODO,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: error.response.data
    });
  }
};

export const removeTodo = todoIdAndIndex => async dispatch => {
  try {
    await Axios.delete(todoApiEndpoints.deleteTodo + todoIdAndIndex.id);

    dispatch({
      type: REMOVE_TODO,
      payload: todoIdAndIndex.index
    });
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: error.response.data
    });
  }
};
