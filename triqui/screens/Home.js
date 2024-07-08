import React from "react";
import { View, Text, Image } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Welcome to play!</Text>
      <Image source={require("../assets/images/ControlTriqui.png")} />
    </View>
  );
}
