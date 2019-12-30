import {
  FETCH_TODO,
  POST_TODO,
  REMOVE_TODO,
  TODO_ERROR
} from "../actions/actionConstants";

const initialState = {
  todos: [],
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        todos: action.payload,
        errors: {}
      };

    case POST_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        errors: {}
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id === action.payload.id),
        errors: {}
      };

    case TODO_ERROR:
      return {
        ...state,
        errors: action.payload
      };

    default:
      return state;
  }
}
