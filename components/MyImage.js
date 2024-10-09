import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff', 
    borderRadius: 20, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 10, 
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10, 
    margin: 20, 
  },
  profileImage: {
    width: 120, 
    height: 120,
    borderRadius: 60, 
    borderWidth: 4,
    borderColor: '#5A67D8', 
    marginBottom: 15, 
  },
  name: {
    marginTop: 10,
    fontSize: 24, 
    fontWeight: '700', 
    color: '#1F2937', 
  },
  title: {
    fontSize: 28, 
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#5A67D8', 
  },
  description: {
    marginTop: 5,
    fontSize: 16, 
    color: '#4B5563', 
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 1.5, 
  },
  footer: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#F3F4F6', 
    borderRadius: 10,
    alignSelf: 'stretch', 
    alignItems: 'center', 
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280', 
    textAlign: 'center',
  },
});

const MyImage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image
        style={styles.profileImage}
        source={{
          uri: 'https://drive.google.com/file/d/1UczJgtPM8wt10nazuwz-Nxu55jaOoRdd/view', 
        }}
      />
      <Text style={styles.name}>Kristine Asi</Text>
      <Text style={styles.description}>
        A BSIT student with a passion for problem-solving and technology, dedicated to continuous learning and innovation for a brighter future and improved lifestyle.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Connect with me!</Text>
      </View>
    </View>
  );
};

export default MyImage;
