import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export function PasswordItem({ data, removePassword }) {
    return(
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{ data }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 15,
        width: "100%",
        marginBottom: 15,
        borderRadius: 12,

    },
    text:{
        color: "#FFF"
    }
})