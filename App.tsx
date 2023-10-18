import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}
