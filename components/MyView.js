import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyViewBoxesWithColorAndText = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.blueBox]} />
      <View style={[styles.box, styles.redBox]} />
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
  },
  box: {
    height: 60,
    borderRadius: 12,
  },
  blueBox: {
    backgroundColor: '#007BFF',
    flex: 0.3,
  },
  redBox: {
    backgroundColor: '#FF4C4C',
    flex: 0.5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 0.2,
    textAlign: 'right',
  },
});

export default MyViewBoxesWithColorAndText;