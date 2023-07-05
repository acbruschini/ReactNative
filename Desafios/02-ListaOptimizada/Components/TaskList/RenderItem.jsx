import { Pressable, StyleSheet, Text} from "react-native";
import React from "react";

const RenderItem = ({ item, onPressTask }) => {
  return (
    <Pressable onPress={() => onPressTask(item)}>
      <Text>{item.task}</Text>
    </Pressable>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
    
});
