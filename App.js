import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import MyActivityIndicator from './components/MyActivityIndicator';
import MyButtonApp from './components/MyButton';
import MyImage from './components/MyImage';
import MyImageBackground from './components/MyImageBackground';
import MyKeyboardAvoidView from './components/MyKeyboardAvoidingView';
import MyModal from './components/MyModal';
import MyStatusBar from './components/MyStatusBar';
import MyPressable from './components/MyPressable';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.card}>
          <MyImage />
        </View>
        <View style={styles.card}>
          <MyImageBackground />
        </View>
        <View style={styles.card}>
          <MyKeyboardAvoidView />
        </View>
        <View style={styles.card}>
          <MyActivityIndicator />
        </View>
        <View style={styles.card}>
          <MyButtonApp />
        </View>
        <View style={styles.card}>
          <MyModal />
        </View>
        <View style={styles.card}>
          <MyStatusBar />
        </View>
        <View style={styles.card}>
          <MyPressable />
        </View>

      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F0F0F3',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '90%',
  },
});