import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
//import { colors } from "../Global/Colors";
import { Entypo } from "@expo/vector-icons";

const ItemCart = ({ itemCart, removeItem} ) => {

  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {itemCart.title} ({itemCart.quantity})
        </Text>
        <Text style={styles.text2}>{itemCart.brand}</Text>
        <Text style={styles.text2}>${itemCart.price}</Text>
      </View>
      <Pressable onPress={() => removeItem(itemCart.id)}>
        <Entypo name="trash" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    //fontFamily: "Josefin",
    fontSize: 19,
    //color: colors.red,
  },
  text2: {
    //fontFamily: "Josefin",
    fontSize: 14,
    //color: colors.peach,
  },
});
