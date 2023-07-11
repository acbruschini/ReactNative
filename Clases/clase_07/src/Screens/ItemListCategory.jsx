import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'
import { searchValidation } from '../Validations/expressions.js'

const ItemListCategory = ({ category, categorySelected, setCategorySelected }) => {

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeyordError] = useState("")

  useEffect(()=> {
    const productsFiltered = productsRaw.filter(product => product.category === categorySelected && product.title.includes(keyword))
    setProducts(productsFiltered)

  }, [categorySelected, keyword])

  const onSearch = (input) => {
    const isValid = searchValidation.test(input);
    if (isValid) {
      setKeyword(input);
      setKeyordError("");
    } else {
      setKeyordError("Solo letras y numeros.")
    }
  }  

  return (
    <View style={styles.container}>
        <Search
          onSearch={onSearch}
          error={keywordError}
          setCategorySelected={setCategorySelected}
        />
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => ProductItem({item})}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
        height: '90%',
        backgroundColor: colors.lightPink,
        alignItems: 'center'
    }
})