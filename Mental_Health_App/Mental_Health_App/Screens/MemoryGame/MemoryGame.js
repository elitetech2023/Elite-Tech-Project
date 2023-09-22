import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';

const cards = [
  //"😄",
  //"❤️",
  //"💰",
  "🚀",
  //"🍕",
  //"👑",
  "👍🏻",
  "😎",
  "✅",
  //"⚡",
  //"😭",
  "⭐",
  "🔥",
  //"👎",
  //"📷",
  //"🎉",
  //"💌"
];
export default function MemoryGame() {

  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards]))
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    if (selectedCards.length < 2) return;
    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards])
      setSelectedCards([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards])

  const handleTapCard = index => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    setScore(score + 1);
  }

  const didPlayerWin = () => matchedCards.length === board.length;

  const resetGame = () => {
    setMatchedCards([]);
    setScore(0);
    setSelectedCards([]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {didPlayerWin() ? "Congratualations 🎉" : "Memory Game 🧠"}
      </Text>
      <Text style={styles.title}>Score: {score}</Text>
      <View style={styles.board}>
        {board.map((card, index) => {
          const isTurnedOver = selectedCards.includes(index) || matchedCards.includes(index);
          return (
            <Card
              key={index}
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCard(index)}
            >
              {card}
            </Card>
          )
        })}
      </View>

      {didPlayerWin() && <TouchableOpacity
        style={styles.button}
        onPress={resetGame}>
        <Text style={styles.buttonText}>Play Again ◀️</Text>
      </TouchableOpacity>}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "900",
    marginBottom: 10,
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    marginTop:20,
    backgroundColor: '#334155', // iOS blue button color
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#FFFFFF', // white text color
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];

  }
  return array;
}