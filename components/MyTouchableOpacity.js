import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyTouchableOpacity = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>Count: {count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F0F0F3',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  countContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  countText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default MyTouchableOpacity;