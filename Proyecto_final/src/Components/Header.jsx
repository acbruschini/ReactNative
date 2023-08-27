import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { generalContentPadding } from "../Global/dimensions.js";
import Search from "./Search.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Features/User/userSlice.js";
import { cartLogOut } from "../Features/Cart/cartSlice.js";
import { deleteSession } from "../SQL_lite/queries.js";

const Header = ({ navigation, title }) => {
  const dispatch = useDispatch()
  const {email,localId} = useSelector(state=>state.userReducer.value)

  const onLogOut = async () => {
    try {
      const res = await deleteSession(localId)
      console.log(res)
      dispatch(logOut())
      dispatch(cartLogOut())
    } catch (error) {
      console.log(error.message)
    }
    
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../Assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.brand}>
          <Image
            source={require("../Assets/logo.png")}
            resizeMode="contain"
            style={styles.iso}
          />
          <Text style={styles.logo}>Quality</Text>
        </View>
        {
          email ? <>
        <Search navigation={navigation} />
        <Pressable onPress={onLogOut}>
          <Text style={styles.logout}>Logout</Text>
        </Pressable></> : null
          
        }
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "black",
  },
  brand: {
    alignItems: "center",
    flexDirection: "row",
    //backgroundColor: "red",
  },
  iso: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  logo: {
    color: "white",
    fontSize: 20,
    fontFamily: "Clarendon",
  },
  image: {
    flexDirection: "row",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: generalContentPadding,
    paddingRight: generalContentPadding,
  },
  logout: {
    color: "red"
  }
});
