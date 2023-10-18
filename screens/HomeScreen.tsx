import React from "react";
import { Button, View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Button
        className="bg-red-500"
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;
