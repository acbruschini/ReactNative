import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/Navigation/Navigator";
import { useFonts } from "expo-font";
import Store from "./src/Store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { init, dropTableSessions, getSession } from "./src/SQL_lite/queries"

export default function App() {

  const [fontsLoaded] = useFonts({
    Clarendon: require("./src/Assets/clarendon.ttf"),
  });

  useEffect(() => {
    (async () => {
      try {
        res2 = await dropTableSessions()
        res = await init();
        console.log("DB inicializada");
        console.log(res)
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);


  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
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
