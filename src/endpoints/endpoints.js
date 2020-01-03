export const userApiEndpoints = {
  register: process.env.REACT_APP_API_ENDPOINT + "/api/users/register",
  login: process.env.REACT_APP_API_ENDPOINT + "/api/users/login"
};

export const todoApiEndpoints = {
  addTodo: process.env.REACT_APP_API_ENDPOINT + "/api/todo",
  fetchAllTodos: process.env.REACT_APP_API_ENDPOINT + "/api/todo/all",
  updateTodo: process.env.REACT_APP_API_ENDPOINT + "/api/todo",
  deleteTodo: process.env.REACT_APP_API_ENDPOINT + "/api/todo/"
};
