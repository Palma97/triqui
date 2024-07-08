import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameZone from "./screens/Game";
import Home from "./screens/Home";

const HomeStack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <HomeStack.Navigator initialRoute="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="GameZone" component={GameZone} />
    </HomeStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
