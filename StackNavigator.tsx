import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import React from "react";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
