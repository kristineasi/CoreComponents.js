import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native';

const DATA = [
  { title: 'Main Dishes', data: ['Pizza', 'Burger', 'Risotto'] },
  { title: 'Sides', data: ['French Fries', 'Onion Rings', 'Fried Shrimps'] },
  { title: 'Drinks', data: ['Water', 'Coke', 'Beer'] },
  { title: 'Desserts', data: ['Cheese Cake', 'Ice Cream'] },
];

const MySectionList = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{title}</Text>
        </View>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    paddingTop: StatusBar.currentHeight,
  },
  headerContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    color: '#555',
  },
});

export default MySectionList;