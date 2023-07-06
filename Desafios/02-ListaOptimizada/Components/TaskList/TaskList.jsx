import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import RenderItem from "./RenderItem";

const TaskList = ({ tasks, onPressTask }) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.containerFlatList}
        data={tasks}
        keyExtractor={tasks.id}
        renderItem={({ item }) => {
          return <RenderItem item={item} onPressTask={onPressTask} />;
        }}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    //backgroundColor: "green", //borrar para ver

  },
  containerFlatList: {
    padding: 15,
    paddingLeft: 15,
    //backgroundColor: "yellow",
    width: "100%",
    alignItems:"center",
    gap: 15,
  },
});
