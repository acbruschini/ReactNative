import { FlatList, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import Card from "./Card";

const ItemOrder = ({ order }) => {
  console.log(order);
  //const total = order.items.reduce((acc, item) => acc += item.price + item.quantity, 0)
  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{order.updatedAt}</Text>
        <FlatList
          data={order.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card>
              <Text>{item.title}</Text>
            </Card>
          )}
        />
        <Text style={styles.text2}>${order.total}</Text>
      </View>
      <Feather name="search" size={30} color="black" />
    </View>
  );
};

export default ItemOrder;

const styles = StyleSheet.create({});
