import { FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import ItemProduct from "../Components/ItemProduct";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery} from "../Services/shopServices";

const ItemListProducts = ({ navigation, route }) => {
  const { searchKey } = route.params;
  const category = useSelector(state => state.shopReducer.value.categorySelected)
  const allProducts = useSelector(state => state.shopReducer.value.allProducts)
  const { data: productsFiltered, isError, isLoading } = useGetProductsByCategoryQuery(category)
  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState(searchKey? searchKey : "")  

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
  }, [keyword, searchKey, productsFiltered, allProducts]);

  return (
    <View>
      <FlatList
        data={productsList}
        keyExtractor={(productsList) => productsList.id}
        renderItem={({ item }) => 
          <ItemProduct product={item} navigation={navigation} />
        }
      />
    </View>
  );
};

export default ItemListProducts;
