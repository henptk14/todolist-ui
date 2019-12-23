import Axios from "axios";
import { userApiEndpoints } from "../endpoints/endpoints";
import {
  REGISTER_ERROR,
  REGISTER_USER,
  LOGIN,
  LOGIN_ERROR
} from "./actionConstants";
import setJWTToken from "../components/securityutils/setJWTToken";
import jwt_decode from "jwt-decode";

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
    dispatch({
      type: REGISTER_ERROR,
      payload: error.response.data
    });
  }
};

export const login = loginRequest => async dispatch => {
  try {
    const response = await Axios.post(userApiEndpoints.login, loginRequest);
    const { token } = response.data;
    localStorage.setItem("jwtToken", token);
    setJWTToken(token);
    const decoded = jwt_decode(token);
    dispatch({
      type: LOGIN,
      payload: decoded
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data
    });
  }
};
