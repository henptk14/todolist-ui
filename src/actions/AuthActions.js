import Axios from "axios";
import { userApiEndpoints } from "../endpoints/endpoints";
import { REGISTER_ERROR, REGISTER_USER } from "./actionConstants";

export const registerNewUser = (newUser, history) => async dispatch => {
  try {
    const response = await Axios.post(userApiEndpoints.register, newUser);
    if (response.data) {
      history.push("/");
    }
    dispatch({
      type: REGISTER_USER,
      payload: {}
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: REGISTER_ERROR,
      payload: error.response.data
    });
  }
};
