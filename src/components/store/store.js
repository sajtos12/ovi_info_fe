import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const storeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({});

export const store = createStore(
  rootReducer,
  storeEnchancers(applyMiddleware(thunk))
);
