import { store } from "../Redux/createStore";
import { interpolate } from "react-native-reanimated";

describe("checking reducer", () => {
  it("should have a initial state with page =-1", () => {
    let mockstore = store;
    expect(mockstore.getState().currentPage).toBe(-1);
  });

  it("should not change state on any misleading action type", () => {
    let mockstore = store;
    let previousState = mockstore.getState;
    mockstore.dispatch({ type: "XYZ" });
    let newState = mockstore.getstate();
    expect(newState).tobe(previousState);
  });
});
