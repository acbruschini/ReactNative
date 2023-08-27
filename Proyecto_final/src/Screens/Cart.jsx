import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
//import CartData from "../Assets/cart.json";
import ItemCart from "../Components/ItemCart";
import { useDispatch, useSelector } from "react-redux";
import { usePostCartMutation } from "../Services/shopServices";
import { removeItem } from "../Features/Cart/cartSlice";

const Cart = () => {
  
  const {total, items: CartData, updatedAt, user} = useSelector(state => state.cartReducer.value)
  const [trigger, result] = usePostCartMutation()
  
  const dispatch = useDispatch()

  console.log("PASO POR CARRITO OTRA VEZ")
  console.log(CartData);

  const onConfirm = () => {
    trigger({total, items: CartData, user, updatedAt})

  }

  const removeItemCB = (id) => {
    console.log("Borrando")
    console.log(id)
    dispatch(removeItem(id))
  }

  return (
    <View>
      <FlatList
        data={CartData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ItemCart itemCart={item} removeItem={removeItemCB}></ItemCart>}
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
