import { StyleSheet} from "react-native";
import Navigator from "./src/Navigation/Navigator";
import { useFonts } from "expo-font";
import Store from "./src/Store/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { dropTableSessions, init} from "./src/SQL_lite/queries"

export default function App() {

  const [fontsLoaded] = useFonts({
    Clarendon: require("./src/Assets/clarendon.ttf"),
  });

  useEffect(() => {
    (async () => {
      try {
        //const res = await dropTableSessions();
        const res = await init();
      } catch (error) {
        console.log("ERROR: ")
        console.log(error);
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
