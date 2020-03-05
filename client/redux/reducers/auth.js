const userDefaultState = {};

export const authReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.auth };

    default:
      return state;
  }
};
