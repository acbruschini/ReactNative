import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Orders from "../Screens/Orders";

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OrdersHome"
      screenOptions={({ navigation, route }) => ({
        header: () => {
          return <Header title={route.name} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="OrdersHome" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersStack;
