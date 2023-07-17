import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../Global/colors';
import { FontAwesome } from '@expo/vector-icons'

const Search = ({navigation}) => {
    const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Product...'
        value={keyword}
        onChangeText={setKeyword}
        style={styles.search}     
      />
      <Pressable onPress={() => navigation.navigate("Products", { category: "" , searchKey: keyword})}>
      <FontAwesome name="search" size={20} color={Colors.qYellow03} />
    </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
    },
    search: {
        color: "black",
        width: 80,
        padding: 0,
        paddingLeft: 5,
        paddingRight: 5,
        marginRight: 10,
        backgroundColor: Colors.qYellow03,
    }
})