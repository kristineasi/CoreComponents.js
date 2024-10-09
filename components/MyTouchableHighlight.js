import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const MyTouchableHighlightExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
        
      <TouchableHighlight onPress={onPress} underlayColor="#4A90E2">
        
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count || null}</Text>
      </View>
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
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  countText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
});

export default MyTouchableHighlightExample;