import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const GamesScreen = ({navigation}) => {
  const Boxes = () => {
    return (
      <View style={styles.BoxContainer}>
        <View style={styles.box}>
          <TouchableOpacity 
          style={styles.inner}
          onPress={() => navigation.navigate("GameBoard")}>
          <Image 
          source={require("../assets/tictactoe.png")}
          style={styles.logoPhone} />
          <Text style={styles.title}>TicTacToe</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity 
          style={styles.inner}
          onPress={() => navigation.navigate("MemoryGame")}>
          <Image 
          source={require("../assets/MemoryGame.jpg")}
          style={styles.logo} />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity 
          style={styles.inner}
          onPress={() => navigation.navigate("PuzzleGame")}>
          <Image 
          source={require("../assets/logopuzzle.jpg")}
          style={styles.logoPhone} />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <TouchableOpacity 
          style={styles.inner}
          onPress={() => navigation.navigate("MineSwipperGame")}>
          <Image 
          source={require("../assets/Mineswipper.jpeg")}
          style={styles.logoPhone} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Games</Text>
      <Boxes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 5,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 16,
    fontStyle: 'italic',
  },
  BoxContainer: {
    height: 350,
    width: "100%",
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '22%',
  },
  box : {
    width: '50%',
    height: '50%',
    padding: 5,
    backgroundColor: '#F1F1F1',
  },
  inner : {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  logo : {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  logoPhone : {
    width: 120,
    height: 120,
  }
});

export default GamesScreen;