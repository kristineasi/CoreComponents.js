import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MyText = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
      </Text>
      <Text style={styles.bodyText} numberOfLines={3}>
        {bodyText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F4F6F8',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});

export default MyText;