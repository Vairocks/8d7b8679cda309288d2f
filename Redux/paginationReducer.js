import * as types from "./types";

const initialState = {
  currentPage: -1,
  errorMessage: "",
  headerData: ["title", "URL", "created_at", "author"],
  rowsData: [],
  dataArray: [],
  pageLimit: 50,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_DATA:
      return {
        ...state,
        currentPage: action.payload.page,
        rowsData: [...state.rowsData, ...action.payload.rowsData],
        dataArray: [...state.dataArray, ...action.payload.dataArray],
        errorMessage: "",
      };
    case types.API_ERROR:
      return { ...state, errorMessage: "API_FAILED_THIS_TIME" };
    default:
      return state;
  }
};

export default paginationReducer;
