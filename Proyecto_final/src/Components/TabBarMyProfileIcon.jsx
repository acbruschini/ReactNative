import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'

const TabBarMyProfileIcon = ({focused}) => {
  return (
    <View>
      <MaterialCommunityIcons name="face-man-profile" size={24} color={ focused? "yellow" : "red"} />
    </View>
  )
}

export default TabBarMyProfileIcon

const styles = StyleSheet.create({})