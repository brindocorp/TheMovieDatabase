import fetch from "isomorphic-unfetch";
import { getCookieFromServer, setCookie } from "../../utils/cookie";
import Cookies from "js-cookie";

export const login = auth => ({
  type: "LOGIN_USER",
  auth
});

export const auth = auth => ({
  type: "SET_USER",
  auth
});

export const Token = token => ({
  type: "SET_TOKEN",
  token
});
export const setTokenA = token => {
  return async dispatch => {
    dispatch(token(token));
  };
};
export const persistAuth = () => {
  getCookieFromServer("movieBoxDatabase", Request);
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
    // console.log("setAuth", json);
    dispatch(auth(json));
    // return json;
  };
};

export const setAuth = token => {
  // console.log("sa", token);
  return async dispatch => {
    // let header = new Headers({
    //   "Access-Control-Allow-Origin": "*",
    //   "Content-Type": "application/json",
    //   Authorization: token
    // });
    const res = await fetch("http://localhost:4000/me", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: token
      },
      mode: "cors"
    });
    const json = await res.json();
    // console.log("setAuth", json);
    // setCookie("movieBoxDatabase", token);
    // console.log

    dispatch(auth(json));
    dispatch(Token(token));

    // console.log("done");
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
      setCookie("moviesBoxDatabase", dataResult.token);
      // Cookies.set("moviesBoxDatabase", dataResult.token, {
      //   expires: remember ? 365 : null
      // });
      dispatch(setAuth(dataResult.token));
    }
  };
};
