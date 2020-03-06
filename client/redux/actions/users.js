import fetch from "isomorphic-unfetch";
import { setAuth } from "./auth";
export const register = user => ({
  type: "REGISTER_USER",
  user
});

export const setUser = () => {
  type: "SET_USERS";
};

export const startSetUser = () => {
  return async dispatch => {
    // let data = await
  };
};

export const startRegister = (userData = {}) => {
  return async dispatch => {
    const { name = "", email = "", password = "" } = userData;

    // const user = {
    //   email,
    //   name,
    //   password
    // };
    let header = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    let data = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: header,
      //   //   headers: header,
      //   //   headers: header,
      mode: "cors",
      body: JSON.stringify(userData)
    });
    const dataResult = await data.json();

    if (data.errors) {
      // throw new Error(data.errors);
      return false;
    } else {
      dispatch(register(dataResult));
      dispatch(setAuth(dataResult.token));
      return true;
    }
  };
};
