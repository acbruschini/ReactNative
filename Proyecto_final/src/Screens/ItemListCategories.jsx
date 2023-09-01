import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useGetCategoriesQuery } from "../Services/shopServices";
import ItemCategory from "../Components/ItemCategory";

const ItemListCategories = ({navigation}) => {

  const {data: CategoriesRaw, isLoading, isError} = useGetCategoriesQuery()

  return (
    <View>
      <FlatList
        data={CategoriesRaw}
        keyExtractor={(CategoriesRaw) => CategoriesRaw}
        renderItem={({ item }) => <ItemCategory category={item} navigation={navigation}/>}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({});
