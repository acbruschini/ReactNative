import { StyleSheet, Text, View} from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const ItemOrder = ({ order }) => {
  const total = order.items.reduce((acc, item) => acc += item.price + item.quantity, 0)
  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.text2}>${total}</Text>
      </View>
      <Feather name="search" size={30} color="black" />
    </View>
  );
};

export default ItemOrder;

const styles = StyleSheet.create({});
