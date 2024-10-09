import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

// Separator component for visual spacing
const Separator = () => <View style={styles.separator} />;

const MyButtonApp = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Buttons Showcase</Text>

    {/* First Button */}
    <View style={styles.buttonContainer}>
      <Button
        title="Press Me"
        color="#1E90FF"  
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />

    {/* Second Button with adjusted color */}
    <View style={styles.buttonContainer}>
      <Button
        title="Press Me"
        color="#A855F7"  
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />

    {/* Disabled Button */}
    <View style={styles.buttonContainer}>
      <Button
        title="Disabled Button"
        color="#C0C0C0"  
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />

    {/* Button Row */}
    <View style={styles.fixToText}>
      <Button
        title="Left Button"
        color="#32CD32"  
        onPress={() => Alert.alert('Left button pressed')}
      />
      <Button
        title="Right Button"
        color="#FF4500"  
        onPress={() => Alert.alert('Right button pressed')}
      />
    </View>
  </SafeAreaView>
);

// Stylesheet for component styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#F0F4F8',  
  },
  title: {
    fontSize: 26,  
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2F4F4F',  
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 5,  
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: '#D3D3D3',  
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default MyButtonApp;
