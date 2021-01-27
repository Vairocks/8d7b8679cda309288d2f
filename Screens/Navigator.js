import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigator = () => {
  <NavigationContainer>
    <Stack.Screen name="table" component="TableComponent" />
    <Stack.Screen name="details" component="Detail" />
  </NavigationContainer>;
};

export default Navigator;
