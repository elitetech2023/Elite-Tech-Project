import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookScreen from './Components/BookScreen';
import QRScannerBooking from './Components/QRScannerBooking';

const Tab = createMaterialTopTabNavigator();

function BookingScreen({navigation}) {
    return (
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 16 },
          style: { fontWeight: 'bold'},
        }}>
        <Tab.Screen 
          name="Book"
          options={{ headerShown: false }}
          component={BookScreen} />
        <Tab.Screen 
          name="Scanner" 
          options={{ headerShown: false }}
          component={QRScannerBooking} />
      </Tab.Navigator>
    );
  }

export default BookingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});