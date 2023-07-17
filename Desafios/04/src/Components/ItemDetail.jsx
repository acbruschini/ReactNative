import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ItemDetail = ({ product }) => {
    console.log(product)
  return (
    <View>
      <Image source={{ uri: product.images[0] }} resizeMode="cover" style={styles.image} />
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>

    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 250,
    },
});
