import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemOrder from '../Components/ItemOrder'
import OrdersData from "../Assets/orders.json"

const Orders = () => {

  return (
    <View>
        <FlatList
            data={OrdersData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ItemOrder order={item}/>}
        />
      
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})