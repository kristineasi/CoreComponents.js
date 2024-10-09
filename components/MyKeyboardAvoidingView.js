import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Keyboard,
} from 'react-native';

const MyKeyboardAvoidView = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Keyboard Avoiding View</Text>
          <TextInput 
            placeholder="Username" 
            style={styles.textInput} 
            placeholderTextColor="#888" // Placeholder color for better visibility
          />
          <View style={styles.btnContainer}>
            <Button 
              title="Submit" 
              onPress={() => Alert.alert('Submitted.')} 
              color="#1E90FF" // Standard blue color for the button
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Light background color for a clean look
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'center', // Center the content vertically
  },
  header: {
    fontSize: 32, // Slightly reduced font size for a cleaner look
    textAlign: 'center',
    marginBottom: 48,
    color: '#333', // Dark color for the header
  },
  textInput: {
    height: 50,
    borderColor: '#007BFF', // Blue color for the border
    borderBottomWidth: 2, // Increased border width for better visibility
    marginBottom: 36,
    paddingHorizontal: 10, // Added padding for better input experience
  },
  btnContainer: {
    backgroundColor: 'white',
    borderRadius: 5, // Rounded corners for the button container
    overflow: 'hidden', // Clip the button to the container
  },
});

export default MyKeyboardAvoidView;
