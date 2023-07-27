import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { generalContentPadding } from "../Global/dimensions";
import { useSelector } from "react-redux";

const ItemDetail = () => {

  const product = useSelector(state => state.shopReducer.value.idSelected)

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images[0] }} resizeMode="cover" style={styles.image} />
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>

    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
    container: {
        padding: generalContentPadding
    },
    image: {
        width: 300,
        height: 250,
    },
});
