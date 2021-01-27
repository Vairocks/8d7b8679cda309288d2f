import { store } from "../redux/createStore";
import * as types from "../redux/ActionTypes";
import { getPayload } from "../Utils";
import { fetchData } from "../redux/actionCreator";

describe("Redux store", () => {
  it(" should have a initial state", () => {
    const mockStore = store;
    let initialState = mockStore.getState();
    expect(initialState.page).toEqual(-1);
  });

  it("should give an error message on API failure", () => {
    const mockStore = store;
    mockStore.dispatch({ type: types.API_ERROR, payload: "timeout" });
    let newState = mockStore.getState();
    expect(newState.errorMessage).toMatch(/timeout/);
  });
  it("should return same state on mismatching action type", () => {
    const mockStore = store;
    let previousState = mockStore.getState();
    mockStore.dispatch({ type: "GET_PREVIOUS", payload: "timeout" });
    let newState = mockStore.getState();
    expect(newState).toEqual(previousState);
  });
  it("should get page 0 in store", () => {
    const payload = getPayload();
    const mockStore = store;
    let previousState = mockStore.getState();
    mockStore.dispatch({ type: types.GET_NEW_PAGE, payload: payload });
    let newState = mockStore.getState();
    expect(newState).not.toEqual(previousState);
    expect(newState.page).toBe(0);
  });
});

describe("redux actions", () => {
  it("should fetch new page to store", async () => {
    const mockStore = store;
    let obj = await fetchData(0);
    await mockStore.dispatch(obj);
    const newState = mockStore.getState();
    expect(newState.page).toBe(0);
  });
});
