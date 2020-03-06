const userDefaultState = {};

export const authReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      if (action.auth && action.auth._id) {
        return { ...action.auth };
      } else return state;
    default:
      return state;
  }
};

export const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      if (action.token) {
        return action.token;
      } else return null;

    default:
      return null;
  }
};
