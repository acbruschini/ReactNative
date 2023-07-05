import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/colors";

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    height: "10%",
    backgroundColor: colors.almostBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.pink,
    fontSize: 25
  }
});
