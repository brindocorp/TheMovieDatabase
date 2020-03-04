export const register = user => ({
  type: "REGISTER_USER",
  user
});

export const startRegister = (userData = {}) => {
  return dispatch => {
    const {
      firstName = "",
      lastName = "",
      phoneNumber = "",
      email = "",
      department = "",
      password = "",
      confirm_password = ""
    } = userData;

    const user = {
      email,
      firstName,
      lastName,
      department,
      phoneNumber,
      password,
      confirm_password
    };

    return axios
      .post("/api/users/register", user)
      .then(snapshot => {
        console.log(snapshot.data);
        dispatch(register(snapshot.data));
        return { success: true };
      })
      .catch(e => {
        if (e.response) {
          const errorreg = { error: e.response };
          console.log(errorreg);
          dispatch(errorRegister(errorreg));
          // console.log(error.response.data)
          return { success: false };
        }
      });
  };
};
