import { Pressable, StyleSheet, Text, Dimensions} from "react-native";
import React from "react";

const RenderItem = ({ item, onPressTask }) => {
  return (
    <Pressable style={item.completed? styles.taskCompleted : styles.task } onPress={() => onPressTask(item)}>
            <Text>{item.task}</Text>
    </Pressable>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
    task: {
        width: Dimensions.get("window").width - 30,  
        minHeight: 60,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",  
    },
    taskCompleted: {
      width: Dimensions.get("window").width - 30,  
      minHeight: 60,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center",  
    }

});
