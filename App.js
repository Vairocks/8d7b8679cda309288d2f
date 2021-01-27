import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Redux/createStore";
import Navigator from "./Screens/Navigator";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
