import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import React from 'react'

const TabBarShopIcon = ({focused}) => {
  return (
    <View>
      <Entypo name="shop" size={24} color={ focused? "yellow" : "red"} />
    </View>
  )
}

export default TabBarShopIcon

const styles = StyleSheet.create({})