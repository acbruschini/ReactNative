import { StyleSheet,View } from 'react-native'
import React from 'react'
import ItemDetail from '../Components/ItemDetail'

const ProductDetail = ({navigation, route}) => {
  const {product} = route.params
  return (
    <View>
      <ItemDetail product={product} />
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})