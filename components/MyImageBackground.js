import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.simplilearn.com%2Fimportance-of-technology-article&psig=AOvVaw21RTcISYUSDAHixWx3LQkJ&ust=1728561752018000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCC5sCggYkDFQAAAAAdAAAAABAE'};

const MyImageBackground = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>BSIT3-2</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default MyImageBackground;