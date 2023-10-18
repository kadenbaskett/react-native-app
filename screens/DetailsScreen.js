import { Button, View, Text } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>This is the Details Screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default DetailsScreen;
