import React from "react";
import Header from '../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignupScreen from "../Screens/Signup";
import LoginScreen from "../Screens/Login";

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Signup"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;