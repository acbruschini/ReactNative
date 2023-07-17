import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ItemListCategories from "../Screens/ItemListCategories";
import ItemListProducts from "../Screens/ItemListProducts";
import ProductDetail from "../Screens/ProductDetail";
import Header from "../Components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={({ navigation ,route }) => ({
            header: () => {
              return <Header title={route.name} navigation={navigation}/>;
            },
          })}
        >
          <Stack.Screen name="Categories" component={ItemListCategories} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Products" component={ItemListProducts} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
