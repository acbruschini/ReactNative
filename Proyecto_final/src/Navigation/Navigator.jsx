import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrdersStack from "./OrdersStack";
import { generalContentPadding } from "../Global/dimensions";
import { Colors } from "../Global/colors";
import TabBarShopIcon from "../Components/TabBarShopIcon";
import TabBarCartIcon from "../Components/TabBarCartIcon";
import TabBarOrdersIcon from "../Components/TabBarOrdersIcon";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import ProfileStack from "./ProfileStack";
import TabBarMyProfileIcon from "../Components/TabBarMyProfileIcon";
import { getSession } from "../SQL_lite/queries";
import { setUser } from "../Features/User/userSlice";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  const { email } = useSelector((state) => state.userReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        console.log("NAVIGATOR SESSION");
        const res = await getSession();
        console.log(res);
        if (res?.rows.length) {
          const user = res.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log(error.message)
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.container}> */}
      <NavigationContainer>
        {email ? (
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: styles.tabBar,
            }}
          >
            <Tab.Screen
              name="Shop"
              component={ShopStack}
              options={{
                tabBarIcon: TabBarShopIcon,
              }}
            />
            <Tab.Screen
              name="Cart"
              component={CartStack}
              options={{
                tabBarIcon: TabBarCartIcon,
              }}
            />
            <Tab.Screen
              name="Orders"
              component={OrdersStack}
              options={{
                tabBarIcon: TabBarOrdersIcon,
              }}
            />
            <Tab.Screen
              name="MyProfile"
              component={ProfileStack}
              options={{
                tabBarIcon: TabBarMyProfileIcon,
              }}
            />
          </Tab.Navigator>
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </View>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "black",
    shadowColor: "black",
    elevation: 4,
    position: "absolute",
    bottom: generalContentPadding,
    left: generalContentPadding,
    right: generalContentPadding,
    height: 90,
  },
});
