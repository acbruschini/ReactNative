import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const AddButton = ({
    title = "",
    onPress = () => {},
    color = "red",
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderWidth: 1,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    text: {
        fontSize: 18,
        color: "black",
    },
});