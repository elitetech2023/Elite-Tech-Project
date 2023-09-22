import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";


export default function Cell
  ({
    row,
    col,
    isBomb,
    isFlipped,
    value,
    handlePress
  }) {

  return (
    <Pressable
      onPress={()=> handlePress(row,col)}
      style={[styles.container, !isFlipped && styles.isFlipped]}
    >
      <Text style={styles.text}>{isFlipped && (isBomb ? '💣' : value)}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderWidth: 3,
    borderColor: '#213176',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  isFlipped: {
    backgroundColor: '#3852c6',
  },
  text: {
    fontSize: 22,
    fontWeight: 800,
    color: 'white',
  }
});
