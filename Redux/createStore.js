import { createStore, applyMiddleware } from "redux";
import paginationReducer from "./paginationReducer";
import thunk from "redux-thunk";

export const store = createStore(paginationReducer, applyMiddleware(thunk));
