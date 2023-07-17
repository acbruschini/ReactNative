import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import ProductsRaw from "../Assets/products.json";
import ItemProduct from "../Components/ItemProduct";

const ItemListProducts = ({ navigation, route }) => {
  const { category } = route.params;
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const productsFiltered = ProductsRaw.filter(
      (product) => product.category === category
    );
    setProductsList(productsFiltered);
  }, [category]);

  return (
    <View>
      <FlatList
        data={productsList}
        keyExtractor={(productsList) => productsList.id}
        renderItem={({ item }) => 
          <ItemProduct product={item} navigation={navigation} />
        }
      />
      <Text>Products {category}</Text>
    </View>
  );
};

export default ItemListProducts;

const styles = StyleSheet.create({});
