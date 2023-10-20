import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View, Text } from "react-native";
import { RootStackParamList } from "../StackNavigator";

type DetailsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text className="text-red-500">This is the Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default HomeScreen;
