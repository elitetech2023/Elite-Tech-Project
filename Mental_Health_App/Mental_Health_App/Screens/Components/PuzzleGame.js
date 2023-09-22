import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PuzzleGame = () => {
  const [tiles, setTiles] = useState([
    { id: 1, position: 1, text: '1' },
    { id: 2, position: 2, text: '2' },
    { id: 3, position: 3, text: '3' },
    { id: 4, position: 4, text: '4' },
    { id: 5, position: 5, text: '5' },
    { id: 6, position: 6, text: '6' },
    { id: 7, position: 7, text: '7' },
    { id: 8, position: 8, text: '8' },
    { id: 0, position: 9, text: '' }, // Empty tile
  ]);

  const shuffleTiles = () => {
    // Fisher-Yates shuffle algorithm
    const shuffledTiles = [...tiles];

    for (let i = shuffledTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
    }

    setTiles(shuffledTiles);
  };

  const moveTile = (tile) => {
    if (tile.position === 9) {
      return;
    }

    const emptyTile = tiles.find((t) => t.position === 9);
    const emptyTileIndex = tiles.findIndex((t) => t.position === 9);
    const tileIndex = tiles.findIndex((t) => t.id === tile.id);

    if (
      (tileIndex === emptyTileIndex - 1 && emptyTileIndex % 3 !== 0) ||
      (tileIndex === emptyTileIndex + 1 && emptyTileIndex % 3 !== 2) ||
      tileIndex === emptyTileIndex - 3 ||
      tileIndex === emptyTileIndex + 3
    ) {
      const updatedTiles = [...tiles];
      [updatedTiles[tileIndex], updatedTiles[emptyTileIndex]] = [
        updatedTiles[emptyTileIndex],
        updatedTiles[tileIndex],
      ];
      setTiles(updatedTiles);
    }
  };

  const checkWin = () => {
    const isWin = tiles.every((tile) => tile.position === tile.id - 1);
    if (isWin) {
      alert('Congratulations! You solved the puzzle!');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.hd}>Puzzle Numbers</Text>
      <Text style={styles.hd}>🤔</Text>
      <View style={styles.board}>
        {tiles.map((tile) => (
          <TouchableOpacity
            key={tile.id}
            style={styles.tile}
            onPress={() => moveTile(tile)}
          >
            <Text style={styles.tileText}>{tile.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={shuffleTiles}>
        <Text style={styles.buttonText}>Play Again ◀️</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={() => checkWin()}>
        <Text>Check</Text>
      </TouchableOpacity> */}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    backgroundColor: " white",
    borderColor: "grey",
    borderRadius: 25,

  },
  tile: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#334155",
  },
  tileText: {
    fontSize: 28,
    color: "white",
    fontWeight:600,
  },
  button: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    marginTop: 20,
  },
  hd:{
    fontSize: 32,
    color: "white",
    fontWeight: "900",
    marginBottom: 19,
  },
  buttonText: {
    color: '#FFFFFF', // white text color
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop:20,
    backgroundColor: '#334155', // iOS blue button color
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default PuzzleGame;