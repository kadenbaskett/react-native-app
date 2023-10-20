import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View, Text } from "react-native";
import { RootStackParamList } from "../StackNavigator";

type DetailsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text className="text-2xl font-bold text-blue-500">
        This is the Details Screen
      </Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default DetailsScreen;
