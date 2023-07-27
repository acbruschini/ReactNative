import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartData from "../Assets/cart.json";
import ItemCart from "../Components/ItemCart";

const Cart = () => {
  
  const total = CartData.reduce((acc, item) => acc += Number(item.price) * Number(item.quantity), 0)
  console.log(total)

  return (
    <View>
      <FlatList
        data={CartData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCart itemCart={item}></ItemCart>}
      />
      <View>
         <Pressable><Text>Confirm</Text></Pressable>
         <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
