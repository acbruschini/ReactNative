import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const ItemProduct = ({ navigation, product }) => {
  return (
    <Pressable onPress={() => navigation.navigate("ProductDetail", { product })}>
      <Card>
        <View>
          <Text>{product.title}</Text>
        </View>
      </Card>
    </Pressable>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({});
