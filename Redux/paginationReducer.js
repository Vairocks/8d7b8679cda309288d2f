import * as types from "./ActionTypes";

const initialState = {
  page: -1,
  dataArray: [{}],
  headData: ["Title", "URL", "Created_At", "Author"],
  rowData: [[]],
  limit: 49,
  errorMessage: "",
};

export default paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEW_PAGE:
      return {
        ...state,
        page: action.payload.page,
        dataArray: [...state.dataArray, ...action.payload.dataArray],
        rowData: [...state.rowData, ...action.payload.rowData],
        errorMessage: "",
      };

    case types.API_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
