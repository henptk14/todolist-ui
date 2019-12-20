import React, { createContext, useState } from "react";
import Axios from "axios";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const createNewUser = async (newUser, history) => {
    try {
      await Axios.post("http://localhost:8080/api/users/register", newUser);
      history.push("/login");
    } catch (error) {
      console.log(error.response.data);

      setError(error.response.data);
    }
  };

  const Login = async loginRequest => {};

  return (
    <UserContext.Provider value={{ createNewUser, error }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
