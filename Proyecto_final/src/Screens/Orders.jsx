import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ItemOrder from "../Components/ItemOrder";
//import OrdersData from "../Assets/orders.json"
import { useGetOrdersQuery } from "../Services/shopServices";
import { useSelector } from "react-redux";

const Orders = () => {
  const { user } = useSelector(state=>state.cartReducer.value)
  const { data: OrdersData, isError, isLoading } = useGetOrdersQuery(user)

  return (
    <View>
        <FlatList
            data={OrdersData}
            keyExtractor={(item) => item.updatedAt}
            renderItem={({item}) => <ItemOrder order={item}/>}
        />
    </View>
  )
}

export default Orders;

const styles = StyleSheet.create({});
