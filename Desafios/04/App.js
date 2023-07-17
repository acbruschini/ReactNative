import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/Navigation/Navigator";
import { useFonts } from "expo-font";


export default function App() {
  const [fontsLoaded] = useFonts({
    "Clarendon": require("./src/Assets/clarendon.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
  <Navigator />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
