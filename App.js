import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import "react-native-gesture-handler"; // Required import
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}
