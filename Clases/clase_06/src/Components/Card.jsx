import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: "80%",
    height: 50,
    marginVertical: 10,
    borderBottomColor: "black",
    borderWidth: 2,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
