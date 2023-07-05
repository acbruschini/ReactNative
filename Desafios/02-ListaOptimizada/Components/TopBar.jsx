import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'react-native'
import React from 'react'

const TopBar = () => {

  return (
    <View style={styles.topbar}>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    topbar: {
        width: "100%",
        height: StatusBar.currentHeight,
        backgroundColor: "white",
    }
})