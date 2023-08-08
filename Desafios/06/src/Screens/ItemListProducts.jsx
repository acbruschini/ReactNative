import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import ItemProduct from "../Components/ItemProduct";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery, useGetProductsQuery } from "../Services/shopServices";

const ItemListProducts = ({ navigation, route }) => {
  const { searchKey } = route.params;
  //const { selectedProducts, allProducts } = useSelector(state => state.shopReducer.value)
  const category = useSelector(state => state.shopReducer.value.categorySelected)
  const { data: productsFiltered, isError, isLoading } = useGetProductsByCategoryQuery(category)
  const { data: allProducts, isError: isError_all, isLoading: isLoading_all} = useGetProductsQuery() 
  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState(searchKey? searchKey : "")
  
  // HACER LA RENDERIZACION CONDICIONAL CON ISERROR

  useEffect(() => {
    setKeyword(searchKey? searchKey : "");
    let productsSearched = []
    if (searchKey) {

      productsSearched = allProducts.filter(
        (product) => product.title.toLocaleLowerCase().includes(searchKey.toLowerCase())
      );
      setProductsList(productsSearched);
    } else {
      setProductsList(productsFiltered);
    }
  }, [keyword, searchKey, productsFiltered]);

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
