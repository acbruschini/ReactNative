import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "../Screens/Home";
import ItemListCategories from "../Screens/ItemListCategories";
import ItemListProducts from "../Screens/ItemListProducts";
import ProductDetail from "../Screens/ProductDetail";
import Header from "../Components/Header";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={({ navigation, route }) => ({
        header: () => {
          return <Header title={route.name} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="Categories" component={ItemListCategories} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={ItemListProducts} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;
