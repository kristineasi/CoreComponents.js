import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const MyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Welcome</Text>
            <Text style={styles.modalText}>
              This is a simple, elegant modal design.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F9FA', // Light background color for the main view
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for better visibility
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 300,
    backgroundColor: '#FFFFFF', // White background for modal
    borderRadius: 20, // Increased border radius for a softer look
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8, // Increased elevation for better shadow effect
  },
  modalTitle: {
    fontSize: 24, // Larger title for better visibility
    fontWeight: '700', // Bold weight for emphasis
    marginBottom: 10,
    color: '#1F2937', // Darker text color for title
  },
  modalText: {
    fontSize: 16,
    color: '#4B5563', 
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 3,
    width: '100%',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#A5B68D', 
  },
  buttonClose: {
    backgroundColor: '#E78F81', 
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default MyModal;
