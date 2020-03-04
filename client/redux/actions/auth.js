import axios from "axios";

export const login = auth => ({
  type: "LOGIN_USER",
  auth
});

export const dispatchLogin = (userCredentials = {}) => {
  return dispatch => {
    const { email, password } = userCredentials;
  };

  try {
    axios.post();
  } catch (error) {}
};
