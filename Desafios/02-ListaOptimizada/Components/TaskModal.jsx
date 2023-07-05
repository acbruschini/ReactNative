import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

const TaskModal = ({ modalVisible, setModalVisible, selectedTask, setActiveTaskStatus }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false); //Flecha para atras de android
      }}
    >
      {/* <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{taskActive.task}</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonDone]}
                            onPress={() => onPressStatus(true)}
                        >
                            <Text style={styles.textStyle}>Done</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonNotyet]}
                            onPress={() => onPressStatus(false)}
                        >
                            <Text style={styles.textStyle}>Not yet</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View> */}
      <View style={styles.container}>
        <View>
          <Text>{selectedTask.task}: {selectedTask.completed}</Text>
          <View>
            <Pressable onPress={() => setActiveTaskStatus(true)}>
                <Text>Completada</Text>
            </Pressable>
            <Pressable onPress={() => setActiveTaskStatus(false)}>
                <Text>Pendiente</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)}>
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
        alignItems:"center",
    }
});
