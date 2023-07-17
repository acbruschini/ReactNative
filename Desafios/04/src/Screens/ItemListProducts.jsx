import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import ProductsRaw from "../Assets/products.json";
import ItemProduct from "../Components/ItemProduct";

const ItemListProducts = ({ navigation, route }) => {
  const { category, searchKey } = route.params;
  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState(searchKey? searchKey : "")

  useEffect(() => {
    setKeyword(searchKey? searchKey : "");
    let productsFiltered = []
    if (category) {
      productsFiltered = ProductsRaw.filter(
        (product) => product.category === category
      );
    } else {
      productsFiltered = ProductsRaw.filter(
        (product) => product.title.toLocaleLowerCase().includes(keyword.toLowerCase())
      );
    }
    setProductsList(productsFiltered);
  }, [category, keyword, searchKey]);

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
