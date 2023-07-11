import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {
  return (
    <Card addStyles={styles.productCardAddStyles}>
        <Text style={styles.textCategory}>{item.title}</Text>
        <Image source={{uri: item.thumbnail}} resizeMode='cover' style={styles.productImage} ></Image>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  productImage: {
    width: 40,
    height: 40,
  },
  productCardAddStyles: {
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 10,
  }
})