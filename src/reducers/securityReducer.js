import { REGISTER_USER, REGISTER_ERROR } from "../actions/actionConstants";

const initialState = {
  validToken: false,
  user: {},
  registerError: {}
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

    default:
      return state;
  }
}
