import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

const MyActivityIndicator = () => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>Activity Indicator</Text>
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default MyActivityIndicator;
