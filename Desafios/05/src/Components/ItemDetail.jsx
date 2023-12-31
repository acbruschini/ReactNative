import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { generalContentPadding } from "../Global/dimensions";
import { useSelector } from "react-redux";

const ItemDetail = () => {
  const idSelected = useSelector((state) => state.shopReducer.value.idSelected);
  const allProducts = useSelector((state) => state.shopReducer.value.allProducts);
  //const [product, setProduct] = useState("");

  console.log("ID " + idSelected); // LOGUEA BIENd
  console.log(allProducts); // LOGUEA BIEN

  // useEffect(() => {
  //   console.log("TEST") // JAMAS SE VE
  //   if (idSelected) {
  //     const findedProduct = allProducts.find((product) => product.id == idSelected);
  //     console.log("FINDED PRODUCT" + findedProduct); // JAMAS SE VE
  //     setProduct(findedProduct);
  //   } else {
  //     return null;
  //   }
  // }, [idSelected]);

  const product = allProducts.find((product) => product.id == idSelected);

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
