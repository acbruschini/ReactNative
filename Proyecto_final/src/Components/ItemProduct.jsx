import { Pressable, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setIdSelected } from "../Features/Shop/shopSlice";

const ItemProduct = ({ navigation, product }) => {

  const dispatch = useDispatch()

  const onPressDetail = () => {
    navigation.navigate("ProductDetail", { product });
    dispatch(setIdSelected(product.id));
  }

  return (
    <Pressable onPress={onPressDetail}>
      <Card>
        <View>
          <Text>{product.title}</Text>
        </View>
      </Card>
    </Pressable>
  );
};

export default ItemProduct;