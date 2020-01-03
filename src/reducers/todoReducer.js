import {
  FETCH_TODO,
  POST_TODO,
  REMOVE_TODO,
  TODO_ERROR,
  UPDATE_TODO
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
      console.log("todos", [
        ...state.todos.slice(0, action.payload),
        ...state.todos.slice(action.payload + 1)
      ]);

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload),
          ...state.todos.slice(action.payload + 1)
        ],
        errors: {}
      };

    case UPDATE_TODO:
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      if (index) {
        return {
          ...state,
          todos: [
            ...state.todos.slice(0, index),
            action.payload,
            state.todos.slice(index + 1)
          ]
        };
      }
      return {
        ...state,
        errors: {
          FATAL_ERROR: "Fatal error in update todo reducer"
        }
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
