import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

const TouchableWithoutFeedbackExample = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FCE8D8', 
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#C1E1C1', 
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#6A5ACD', 
    fontSize: 16,
  },
  countContainer: {
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    color: '#FFB6C1', 
    fontSize: 18,
  },
});

export default TouchableWithoutFeedbackExample;
