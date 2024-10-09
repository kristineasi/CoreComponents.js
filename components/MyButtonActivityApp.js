import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import MyActivityIndicator from './MyActivityIndicator'; // Import the activity indicator component

// Separator component for visual spacing
const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Press Me"
        color="#007BFF" // Standard blue for the button
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    <View style={styles.section}>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On iOS,
        the color prop controls the color of the text. On Android, the color
        adjusts the background color of the button.
      </Text>
      <Button
        title="Press Me"
        color="#A855F7" // Custom purple color
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View style={styles.section}>
      <Text style={styles.title}>
        All interaction for the component is disabled.
      </Text>
      <Button
        title="Disabled Button"
        color="#C0C0C0" // Light gray for the disabled button
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View style={styles.section}>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left Button"
          color="#28A745" // Green for left button
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right Button"
          color="#FF5722" // Orange for right button
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
    <Separator />
    <View style={styles.section}>
      <Text style={styles.title}>
        Below is an Activity Indicator showing loading status:
      </Text>
      <View style={styles.activityContainer}>
        <MyActivityIndicator /> {/* Render the activity indicator component */}
      </View>
    </View>
  </SafeAreaView>
);

// Stylesheet for component styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa', // Light background color
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#333', 
  },
  section: {
    marginBottom: 20, 
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginVertical: 10,
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  activityContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
