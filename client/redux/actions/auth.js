import fetch from "isomorphic-unfetch";
import axios from "axios";

export const login = auth => ({
  type: "LOGIN_USER",
  auth
});

export const auth = auth => ({
  type: "SET_USER",
  auth
});

export const persistAuth = () => {
  return async dispatch => {
    let header = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: token
    });
    const res = await fetch("http://localhost:4000/me", {
      method: "GET",
      headers: header,
      mode: "cors"
    });
    const json = await res.json();
    console.log("setAuth", json);
    await dispatch(auth(json));
    // return json;
  };
};

export const setAuth = token => {
  console.log("sa", token);
  return async dispatch => {
    let header = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: token
    });
    const res = await fetch("http://localhost:4000/me", {
      method: "GET",
      headers: header,
      mode: "cors"
    });
    const json = await res.json();
    console.log("setAuth", json);
    await dispatch(auth(json));
    // return json;
  };
};

export const startLogin = (userCredentials = {}) => {
  return async dispatch => {
    const { email, password } = userCredentials;

    let header = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    let data = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: header,
      //   //   headers: header,
      //   //   headers: header,
      mode: "cors",
      body: JSON.stringify(userCredentials)
    });
    const dataResult = await data.json();

    // console
    if (data.errors) {
      throw new Error(data.errors);
      //dispatch error
    } else {
      dispatch(setAuth(dataResult.token));
    }
  };
};
