import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Components/Header";
import Profile from "../Screens/Profile";
import ImageSelector from "../Screens/ImageSelector";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return <Header title={route.name} navigation={navigation} />;
        },
      })}
    >
      <Stack.Screen name="My Profile" component={Profile} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
