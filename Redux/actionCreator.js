import * as types from "./types";
const axios = reuire(axios);

const fetchData = (pg) => (dispatch) => {
  let newPage = pg + 1;
  try {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${newPage}`
      )
      .then((res) => {
        let dataArray = res.data.hits;
        let rowsData = dataArray.map((item) => {
          return [item.title, item.url, item.created_at, item.author];
        });
        success(dataArray, rowsData, newPage);
      })
      .catch((e) => {
        failure();
      });
  } catch (e) {
    failure();
  }

  const success = (dataArray, rowsData, newPage) => {
    dispatch({
      type: types.NEW_DATA,
      payload: { dataArray: dataArray, rowsData: rowsData, page: newPage },
    });
  };
  const failure = () => {
    dispatch({ type: types.API_ERROR });
  };
};
