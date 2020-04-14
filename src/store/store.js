import { createStore, combineReducers, applyMiddleware } from "redux";
import loginReducer from "../reducers/login";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const rootReducer = combineReducers({ loginReducer });

const logger = createLogger();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
