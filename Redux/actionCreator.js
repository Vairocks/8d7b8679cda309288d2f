import * as types from "./ActionTypes";
const axios = require("axios");

export const fetchData = (pg) => (dispatch) => {
  let nwpage = pg + 1;

  try {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${nwpage}`
      )
      .then((response) => {
        let dataArr = response.data.hits;
        let rwData = dataArr.map((row, index) => [
          row.title,
          row.url,
          row.created_at,
          row.author,
        ]);
        dispatch(sendSuccess(dataArr, rwData, nwpage));
      })
      .catch((e) => {
        sendError(e);
      });
  } catch (e) {
    sendError(e);
  }
};

const sendSuccess = (dataArr, rwData, nwpage) => ({
  type: types.GET_NEW_PAGE,
  payload: {
    dataArray: dataArr,
    rowData: rwData,
    page: nwpage,
  },
});

const sendError = (e) => ({
  type: types.API_ERROR,
  payload: "API Error",
});
