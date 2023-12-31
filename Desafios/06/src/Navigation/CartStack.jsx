import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Orders from "../Screens/Orders";

import Cart from "../Screens/Cart";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartHome"
      screenOptions={({ navigation, route }) => ({
        header: () => {
          return <Header title={route.name} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="CartHome" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;
