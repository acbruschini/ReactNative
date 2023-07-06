import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

const TaskModal = ({
  modalVisible,
  setModalVisible,
  selectedTask,
  setActiveTaskStatus,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false); //Flecha para atras de android
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalWindow}>
          <Text>
            {selectedTask.task}
          </Text>
          <View style={styles.modalActionsWindows}>
            <Pressable style={styles.completedPressable} onPress={() => setActiveTaskStatus(true)}>
              <Text>Completada</Text>
            </Pressable>
            <Pressable style={styles.pendingPressable} onPress={() => setActiveTaskStatus(false)}>
              <Text>Pendiente</Text>
            </Pressable>
            <Pressable style={styles.cancelPressable} onPress={() => setModalVisible(false)}>
              <Text>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalWindow: {
    paddingTop: 10,
    paddingBottom: 10,
    width: "70%",
    backgroundColor: "white",
    justifyContent:"space-evenly",
    alignItems: "center",
  },
  modalActionsWindows: {
    flexDirection: "row",
    gap: 20,
  },
  completedPressable: {
    padding: 5,
    backgroundColor: "green",
  },
  pendingPressable: {
    padding: 5,
    backgroundColor: "red",
  },
  cancelPressable: {
    padding: 5,
    backgroundColor: "#313335",
  }
});
