import { appReducer } from "./reducers";

import { combineReducers, createStore, applyMiddleware, compose } from "redux";

const store = createStore(
  combineReducers({
    appReducer
  })
);

export { store };
