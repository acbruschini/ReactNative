import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
//import CartData from "../Assets/cart.json";
import ItemCart from "../Components/ItemCart";
import { useSelector } from "react-redux";
import { usePostCartMutation } from "../Services/shopServices";

const Cart = () => {
  
  const {total, items: CartData, updatedAt, user} = useSelector(state => state.cartReducer.value)
  const [trigger, result] = usePostCartMutation()

  const onConfirm = () => {
    trigger({total, items: CartData, user, updatedAt})
  }

  return (
    <View>
      <FlatList
        data={CartData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCart itemCart={item}></ItemCart>}
      />
      <View>
         <Text>Total: ${total}</Text>
         <Pressable onPress={onConfirm} ><Text>Confirm</Text></Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
