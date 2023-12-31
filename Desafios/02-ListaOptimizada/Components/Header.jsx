import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Header = ({taskInput, setTaskInput, onPressInput}) => {
  
  return (
    <View style={styles.container}>
      <Text>Inserte tarea:</Text>
      <TextInput
        style={styles.inputTask}
        onChangeText={setTaskInput}
        value={taskInput}
      ></TextInput>
      <Pressable style={styles.addButton} onPress={onPressInput}>
        <Text>Agregar</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#a9a9a9",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  inputTask: {
    backgroundColor: "white",
    paddingLeft: 5,
    flex: 1,
  },
  addButton: {
    backgroundColor: "#808080",
    padding: 5,
    alignItems: "center",
    height: "100%",
  },
});
