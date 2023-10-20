import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Button, View, Text, Pressable, TextInput } from "react-native";
import { RootStackParamList } from "../StackNavigator";

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View className="flex-1 w-full items-center justify-center bg-gray-950">
      <View className="px-4 w-full max-w-sm">
        <Text className="text-5xl font-bold mb-6 text-gray-50">Login</Text>

        <View className="flex flex-col gap-4">
          <TextInput placeholder="Enter email address" />
          <TextInput placeholder="Enter password" />
        </View>

        <View className="flex flex-row justify-between items-center my-8">
          <View className="flex-row items-center">
            <Pressable className="bg-gray-50 h-6 w-6 rounded-sm mr-2"></Pressable>
            <Text className="text-gray-50">Remember me</Text>
          </View>
          <Pressable>
            <Text className="text-gray-50 font-bold">Reset password</Text>
          </Pressable>
        </View>

        <Button title="Login" />
      </View>
    </View>
  );
};

export default LoginScreen;
