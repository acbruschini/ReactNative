import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import RenderItem from "./RenderItem";

const TaskList = ({ tasks, onPressTask}) => {

  return (
    <View style={styles.container}>
      <FlatList
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
    height: 300,
    backgroundColor: "green",
  },
});
