import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import TaskList from "../Components/TaskList/TaskList";
import TaskModal from "../Components/TaskModal";

const MainScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  const onPressInput = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().valueOf(),
        task: taskInput,
        completed: false,
      },
    ]);
  };

  const onPressTask = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const setActiveTaskStatus = (status) => {
    const nonActiveTasks = tasks.filter((task) => task.id != selectedTask.id);
    setTasks([
      ...nonActiveTasks,
      {
        id: selectedTask.id,
        task: selectedTask.task,
        completed: status,
      },
    ]);
    setModalVisible(false)
  };
  
  return (
    <View style={styles.container}>
      <TopBar></TopBar>
      <Header
        taskInput={taskInput}
        onPressInput={onPressInput}
        setTaskInput={setTaskInput}
      ></Header>
      <TaskList tasks={tasks} onPressTask={onPressTask}></TaskList>
      <TaskModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedTask={selectedTask}
        setActiveTaskStatus={setActiveTaskStatus}
      ></TaskModal>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  taskListContainer: {
    alignItems:"center",
    justifyContent: "center",
    backgroundColor: "yellow",
    height: 400,
  }
});
