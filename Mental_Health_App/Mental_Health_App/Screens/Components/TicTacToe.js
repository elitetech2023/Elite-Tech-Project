import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const PLAYER_ONE = 'X';
const PLAYER_TWO = 'O';

export default function GameBoard() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(PLAYER_ONE);
  };

  const handlePress = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      if (currentPlayer === PLAYER_ONE) {
        setCurrentPlayer(PLAYER_TWO);
      } else {
        setCurrentPlayer(PLAYER_ONE);
      }
    }
  };

  const checkForWinner = (board) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = checkForWinner(board);

  if (winner) {
    if (winner === PLAYER_ONE) {
      setPlayerOneScore(playerOneScore + 1);
    } else {
      setPlayerTwoScore(playerTwoScore + 1);
    }
    resetBoard();
  }

  const renderSquare = (index) => {
    return (
      <TouchableOpacity
        style={styles.square}
        onPress={() => handlePress(index)}
      >
        <Text style={styles.squareText}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreboard}>
        <Text style={styles.scoreText}>Player 1: {playerOneScore}</Text>
        <Text style={styles.scoreText}>Player 2: {playerTwoScore}</Text>
      </View>
      <View style={styles.board}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetBoard}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  squareText: {
    fontSize: 40
  },
  status: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});