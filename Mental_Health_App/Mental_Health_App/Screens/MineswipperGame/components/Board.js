import * as React from 'react';
import Cell from './Cell';
import { gameReducer } from '../reducers/GameReducer';
import createBoard from './utils/createBoard';
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";


const BOARD_SIZE = 10;
const BOMB_NUM = 10;



export default function Board() {

    const [gameState, dispatch] = React.useReducer(gameReducer, {
        board: createBoard(BOARD_SIZE, BOARD_SIZE, BOMB_NUM),
        isGameover: false,
    })

    function handlePress(row, col) {
        dispatch({ type: "HANDLE_CELL", row, col })
    }

    const restartGame = () => {
        dispatch({
            type: "RESTART_GAME",
            boardSize: BOARD_SIZE,
            bombNum: BOMB_NUM,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {gameState.isGameOver ? 'Game Over 😢' : 'Mine Sweeper'}
            </Text>
            {gameState.board.map((row, rowIndx) => (
                <View key={rowIndx} style={styles.row}>
                    {row.map((cell, cellIndx) => (
                        <Cell key={cellIndx} handlePress={handlePress} {...cell} />
                    ))}
                </View>
            ))}
            <View style={styles.btn}>
                {gameState.isGameOver && (
                    <TouchableOpacity onPress={restartGame} >
                        <Text style={styles.buttonText}>Restart⟲</Text>
                    </TouchableOpacity>
                )}
            </View>
            {/* only show the button when the user losses  */}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    container: {
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    text: {
        fontWeight: 900,
        fontSize: 35,
        marginBottom: 25,
        color: 'white',
    },
    btn: {
        marginTop: 20,
        backgroundColor: '#213176',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});