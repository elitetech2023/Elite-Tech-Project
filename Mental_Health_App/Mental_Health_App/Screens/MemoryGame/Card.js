import * as React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Card({ onPress, isTurnedOver, children }) {
    return (
        <Pressable
            onPress={onPress}
            style={isTurnedOver ? styles.cardUp : styles.cardDown}
        >
            {isTurnedOver ? (
                <Text style={styles.text}>{children}</Text>
            ) : (
                <Text style={styles.text}>?</Text>
            )}

        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardUp: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: " #1e2c3d",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 10,
        borderColor: "#334155",
    },
    cardDown: {
        width: 100,
        height: 100,
        margin: 10,
        borderWidth: 10,
        borderColor: "#334155",
        backgroundColor: "#1e2c3d",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 46,
        color: "#334155",
    }
})