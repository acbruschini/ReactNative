import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";

const CategoryItem = ({ item,onPressCategory}) => {
  return (
    <Card>
      <Pressable onPress={() => onPressCategory(item)}>
        <Text style={styles.textCategory}>{item}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  textCategory: {
    fontSize: 18,
  },
});
