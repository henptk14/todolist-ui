import { REGISTER_USER } from "./actionConstants";
import Axios from "axios";

export const securityReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER:
      break;

    default:
      break;
  }
};

const register = async (newUser, history) => {
  try {
    await Axios.post("http://localhost:8080/api/users/register", newUser);
    history.push("/login");
  } catch (error) {}
};
