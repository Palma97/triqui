import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Card({ onPress, isTurnedOver, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, isTurnedOver && styles.cardUp]}
    >
      <Text style={styles.text}>{isTurnedOver ? children : "?"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 80,
    margin: 10,
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#334155",
    borderRadius: 25,
  },
  cardUp: {
    backgroundColor: "#334155",
  },
  text: {
    fontSize: 46,
    color: "white",
  },
});
