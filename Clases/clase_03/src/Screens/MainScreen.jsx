import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>MainScreen {Dimensions.get("window").width}</Text>
        <Text>MainScreen2</Text>
      </View>
      <View style={styles.view}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", //por defecto es esa,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  view: {
    flex: 2,
    backgroundColor: "red",
    width: "50%"
  }
});
