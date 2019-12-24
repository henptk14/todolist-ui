import {
  REGISTER_USER,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT
} from "../actions/actionConstants";

const initialState = {
  validToken: false,
  user: {},
  registerError: {},
  loginError: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerError: action.payload
      };

    case REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload
      };

    case LOGIN:
      return {
        ...state,
        validToken: !!action.payload,
        user: action.payload,
        loginError: {}
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };

    case LOGOUT:
      return {
        initialState
      };

    default:
      return state;
  }
}
