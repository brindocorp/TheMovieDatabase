import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../redux/reducers/users";
import { authReducer } from "../redux/reducers/auth";
import { composeWithDevTools } from "redux-devtools-extension";
// if (process.client) {
// }
const composeEnhancers = compose;

export default () => {
  const store = createStore(
    combineReducers({
      //   auth: auth,
      auth: authReducer,
      users: userReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
