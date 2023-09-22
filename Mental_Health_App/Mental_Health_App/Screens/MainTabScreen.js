import React from 'react';

// A tab bar on the bottom of the screen that lets you switch between different routes
// Install amd import the createBottomTabNavigator dependencies
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Native Stack Navigator provides a way for your app to transition between
screens where each new screen is placed on top of a stack. */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionic from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createNativeStackNavigator();
const JournalDiaryStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import HomeScreen from "./HomeScreen";
import JournalDiaryScreen from "./Journal&Diary";
import FitnessAndStyleScreen from "./Fitness&LifeStyleScreen";
import MyBookingsScreen from './MyBookingsScreen';


const MainTabScreen= () => {
    return (
      // The bottom nav bar
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'black',
                headerShown: false,
            }}
            >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                    <Ionic name="home" size={size} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="JournalDiary"
                component={JournalDiaryStackScreen}
                options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                    <Ionic name="book-sharp" size={size} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="FitnessAndStyle"
                component={FitnessAndStyleScreen}
                options={{
                  tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                    <Ionic name="ios-barbell-sharp" size={size} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="MyBookingsScreen"
                component={MyBookingsScreen}
                options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                    <Ionic name="ios-file-tray-full-sharp" size={size} color={color} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator
        screenOptions={{
          //headerShown: false,
          title: null,
        }}
        >
          <HomeStack.Screen 
          name="HomePage" 
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#00a46c',
            },
            headerLeft: () =>(
              <Icon.Button 
              name="ios-menu" 
              size={25}
              backgroundColor='#00a46c' onPress={() =>navigation.openDrawer()}></Icon.Button>
            ),
            headerRight: () =>(
              <Icon.Button 
              name="ios-notifications-sharp" 
              size={25}
              backgroundColor='#00a46c' onPress={() => navigation.navigate("Notification")}></Icon.Button>
            )
          }}
          />
        </HomeStack.Navigator>
  );
  
  const JournalDiaryStackScreen = ({navigation}) =>(
    <JournalDiaryStack.Navigator
      screenOptions={{
        headerShown: false,
        title: null,
      }}
        >
          <JournalDiaryStack.Screen 
          name="JournalDiaryPage" 
          component={JournalDiaryScreen}
          />
        </JournalDiaryStack.Navigator>
  );