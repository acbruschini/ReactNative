import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { generalContentPadding } from "../Global/dimensions";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Features/Cart/cartSlice";

const ItemDetail = () => {
  const idSelected = useSelector((state) => state.shopReducer.value.idSelected);
  const allProducts = useSelector((state) => state.shopReducer.value.allProducts);

  const product = allProducts.find((product) => product.id == idSelected);

  const dispatch = useDispatch()
  
  const onAdd = () => {
    dispatch(addItem({
      ...product,
      quantity: 1
    }))

  }

  return (
    <View style={styles.container}>
      {console.log(idSelected)}
      <Image
        source={{ uri: product.images[0] }}
        resizeMode="cover"
        style={styles.image}
      />
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
      <Button title="Add to cart" onPress={onAdd}></Button>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    padding: generalContentPadding,
  },
  image: {
    width: 300,
    height: 250,
  },
});
