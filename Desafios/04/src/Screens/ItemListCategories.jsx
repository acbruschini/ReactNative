import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import CategoriesRaw from "../Assets/categories.json";
import ItemCategory from "../Components/ItemCategory";

const ItemListCategories = ({navigation}) => {


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
