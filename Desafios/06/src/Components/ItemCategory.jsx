import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card.jsx";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../Features/Shop/shopSlice.js";

const ItemCategory = ({ category, navigation }) => {
  
  const dispatch = useDispatch();

  const onSelectCategory = () => {
    dispatch(setCategorySelected(category));
    navigation.navigate("Products", { category });
  };

  return (
    <Pressable onPress={onSelectCategory}>
      <Card>
        <View>
          <Text>{category}</Text>
        </View>
      </Card>
    </Pressable>
  );
};

export default ItemCategory;

const styles = StyleSheet.create({});
