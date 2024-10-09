import React, { useState } from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const MyStatusBar = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    setStatusBarStyle(STYLES[styleId % STYLES.length]);
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    setStatusBarTransition(TRANSITIONS[transition % TRANSITIONS.length]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#4A90E2"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <Text style={styles.textStyle}>
        StatusBar Visibility: {hidden ? 'Hidden' : 'Visible'}
      </Text>
      <Text style={styles.textStyle}>
        StatusBar Style: {statusBarStyle}
      </Text>
      {Platform.OS === 'ios' && (
        <Text style={styles.textStyle}>
          StatusBar Transition: {statusBarTransition}
        </Text>
      )}
      <View style={styles.buttonsContainer}>
        <Button
          title="Toggle StatusBar"
          onPress={changeStatusBarVisibility}
          color="#4A90E2"
        />
        <Button
          title="Change StatusBar Style"
          onPress={changeStatusBarStyle}
          color="#4A90E2"
        />
        {Platform.OS === 'ios' && (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition}
            color="#4A90E2"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7F9FA',
  },
  buttonsContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 16,
    color: '#333333',
  },
});

export default MyStatusBar;