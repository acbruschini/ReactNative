import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import React from 'react'

const TabBarOrdersIcon = ({focused}) => {
  return (
    <View>
      <Ionicons name="list-circle-sharp" size={24} color={ focused? "yellow" : "red"} />
    </View>
  )
}

export default TabBarOrdersIcon

const styles = StyleSheet.create({})