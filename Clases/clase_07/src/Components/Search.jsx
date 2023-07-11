import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../Global/Colors";

const Search = ({ onSearch, error, setCategorySelected }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Pressable onPress={() => setCategorySelected("")}>
          <AntDesign name="back" size={24} color="black" />
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={keyword}
          onChangeText={setKeyword}
        />
        <Pressable onPress={() => onSearch(keyword)}>
          <FontAwesome name="search" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => setKeyword("")}>
          <FontAwesome5 name="eraser" size={24} color="black" />
        </Pressable>
      </View>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    gap: 18,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.pink,
    borderRadius: 10,
  },
});
