import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import categories from "../Data/categories.json";
import Card from "../Components/Card";
import CategoryItem from "../Components/CategoryItem";

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.test}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => {
          return <CategoryItem item={item} />;
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  test: {
    width: "100%",
  },
});
