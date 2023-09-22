import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import JournalsScreen from './Components/JournalsScreen';
import DiaryScreen from './Components/DairyScreen';

const Tab = createMaterialTopTabNavigator();

export default function JournalDiaryScreen() {

  return (
    <Tab.Navigator
    tabBarOptions={{
      labelStyle: { fontSize: 16 },
      style: { fontWeight: 'bold'},
    }}>
      <Tab.Screen 
      name="Blogs"
      options={{ headerShown: false }}
      component={JournalsScreen} />
      <Tab.Screen 
      name="Diary" 
      options={{ headerShown: false }}
      component={DiaryScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 40,
    marginBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#FF832B',
  },
  tabText: {
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#000',
  },
});