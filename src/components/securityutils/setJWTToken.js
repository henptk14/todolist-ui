import Axios from "axios";

const setJWTToken = token => {
  token
    ? (Axios.defaults.headers.common["Authorization"] = token)
    : delete Axios.defaults.headers.common["Authorization"];
};

export default setJWTToken;
