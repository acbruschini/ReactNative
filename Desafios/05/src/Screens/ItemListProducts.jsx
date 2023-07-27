import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
//import ProductsRaw from "../Assets/products.json";
import ItemProduct from "../Components/ItemProduct";
import { useSelector } from "react-redux";

const ItemListProducts = ({ navigation, route }) => {
  const { searchKey } = route.params;
  const { selectedProducts, allProducts } = useSelector(state => state.shopReducer.value)
  const category = useSelector(state => state.shopReducer.value.categorySelected)
  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState(searchKey? searchKey : "")

  // console.log(allProducts)

  useEffect(() => {
    setKeyword(searchKey? searchKey : "");
    let productsFiltered = []
    if (searchKey) {
      productsFiltered = allProducts.filter(
        (product) => product.title.toLocaleLowerCase().includes(searchKey.toLowerCase())
      );
    } else {
      productsFiltered = selectedProducts
    }
    setProductsList(productsFiltered);
  }, [category, keyword, searchKey, selectedProducts]);

  return (
    <View>
      <FlatList
        data={productsList}
        keyExtractor={(productsList) => productsList.id}
        renderItem={({ item }) => 
          <ItemProduct product={item} navigation={navigation} />
        }
      />
      {/* <Text>Products {category}</Text> */}
    </View>
  );
};

export default ItemListProducts;

const styles = StyleSheet.create({});
