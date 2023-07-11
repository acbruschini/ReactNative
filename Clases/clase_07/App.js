import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from "expo-font";
import { useState } from 'react';

export default function App() {
  
  const [categorySelected, setCategorySelected] = useState("");
  const [fonts] = useFonts( {
    "Din": require("./src/Assets/ttfs/din/DIN-Black.ttf"),
  })
  
  if(!fonts) {
    return null
  }

  const onPressCategory = (category) => {
    setCategorySelected(category);
  }

  return (
    <View style = {styles.container}>
      <Header/>
      {categorySelected? <ItemListCategory category={categorySelected} setCategorySelected={setCategorySelected} categorySelected={categorySelected}/> : <Home onPressCategory={onPressCategory}></Home>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
