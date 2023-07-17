import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card.jsx";

const ItemCategory = ({ category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Products", { category })}>
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
