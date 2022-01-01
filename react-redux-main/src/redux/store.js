import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { cakeReducer } from "./cakes/cakeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";




const store = createStore(
  cakeReducer,
  composeWithDevTools(applyMiddleware(logger,thunk))
);

export default store;
