import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FitnessScreen from './Components/FitnessScreen';
import LifeStyleScreen from './Components/LifeStyleScreen';

const Tab = createMaterialTopTabNavigator();

function FitnessAndStyleScreen({navigation}) {
    return (
      <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 16 },
        style: { fontWeight: 'bold'},
      }}>
      <Tab.Screen 
      name="Fitness"
      options={{ headerShown: false }}
      component={FitnessScreen} />
      <Tab.Screen 
      name="LifeStyle" 
      options={{ headerShown: false }}
      component={LifeStyleScreen} />
    </Tab.Navigator>
    );
  }

export default FitnessAndStyleScreen;

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
    borderColor: '#000',
  },
  tabText: {
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#000',
  },
});