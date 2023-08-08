import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'

const TabBarCartIcon = ({focused}) => {
  return (
    <View>
      <MaterialCommunityIcons name="cart" size={24} color={ focused? "yellow" : "red"} />
    </View>
  )
}

export default TabBarCartIcon

const styles = StyleSheet.create({})