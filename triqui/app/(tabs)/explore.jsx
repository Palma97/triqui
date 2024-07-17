import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import Card from "../Card";

const cards = ["🦋", "🐒", "🦍", "🐌", "🕷️", "🐕", "🐸", "🦣", "🐝"];

export default function TabTwoScreen() {
  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards]));
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    if (selectedCards.length < 2) return;
    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards((prev) => [...prev, ...selectedCards]);
      setSelectedCards([]);
      setScore((prev) => prev + 1);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards]);

  const handleTapCard = (index) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
  };

  const didPlayerWin = () => {
    return matchedCards.length === board.length;
  };

  const resetGame = () => {
    setMatchedCards([]);
    setSelectedCards([]);
    setScore(0);
    setBoard(shuffle([...cards, ...cards]));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textGame}>
        {didPlayerWin() ? "Congratulations 🥇" : "Memory 🎮"}
      </Text>
      <Text style={styles.textGame}>Score: {score}</Text>
      <View style={styles.board}>
        {board.map((card, index) => {
          const isTurnedOver =
            selectedCards.includes(index) || matchedCards.includes(index);
          return (
            <Card
              key={index}
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCard(index)}
            >
              {card}
            </Card>
          );
        })}
      </View>

      {didPlayerWin() && <Button title="Reset" onPress={resetGame} />}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#0f172a",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textGame: {
    fontSize: 30,
    color: "white",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
