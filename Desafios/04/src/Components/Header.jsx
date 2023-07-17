import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { generalContentPadding } from "../Global/dimensions.js";
import Search from "./Search.jsx";

const Header = ({ navigation, title }) => {
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
        <Search navigation={navigation} />
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
});
