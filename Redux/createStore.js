import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import paginationReducer from "./paginationReducer";

export const store = createStore(paginationReducer, applyMiddleware(thunk));
