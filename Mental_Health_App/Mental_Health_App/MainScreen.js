import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabScreen from './Screens/MainTabScreen';
import { DrawerContent } from './Screens/DrawerContent';
import AboutUsScreen from './Screens/AboutUs';
import NotificationScreen from './Screens/NotificationScreen';
import Profile from './Screens/ProfilePage';
import EditProfile from './Screens/EditProfilePage';
import HelpScreen from './Screens/HelpScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator(); 
const NotificationStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const HelpStack = createNativeStackNavigator();
const AboutUsStack = createNativeStackNavigator();

export default function MainScreen() {
  return (
      <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props}/>}
      screenOptions={{
        headerShown: false,
      }}
      >
        <Drawer.Screen 
        name="Home" 
        component={MainTabScreen}
        />
        <Drawer.Screen 
        name="Profile" 
        component={ProfileStackScreen}
        />
        <Drawer.Screen 
        name="EditProfile" 
        component={EditProfile} />
        <Drawer.Screen 
        name="About Us" 
        component={AboutUsStackScreen} />
        <Drawer.Screen 
        name="Help" 
        component={HelpStackScreen} />
        <Drawer.Screen 
        name="Notification" 
        component={NotificationStackScreen}
        />
      </Drawer.Navigator>
  );
}

const NotificationStackScreen = ({navigation}) =>(
  <NotificationStack.Navigator
      screenOptions={{
        //headerShown: false,
        title: null,
      }}
      >
        <NotificationStack.Screen 
        name="NotificationSreen" 
        component={NotificationScreen}
        options={{
          headerStyle: {
            backgroundColor: '#00a46c',
          },
          headerLeft: () =>(
            <Icon.Button 
            name="ios-close" 
            size={25}
            backgroundColor='#00a46c' onPress={() => navigation.goBack()}></Icon.Button>
          ),
        }}
        />
      </NotificationStack.Navigator>
);

const ProfileStackScreen = ({navigation}) =>(
  <ProfileStack.Navigator
      screenOptions={{
        //headerShown: false,
        title: null,
      }}
      >
        <ProfileStack.Screen 
        name="NotificationSreen" 
        component={Profile}
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
        }}
        />
      </ProfileStack.Navigator>
);

const HelpStackScreen = ({navigation}) =>(
  <HelpStack.Navigator
      screenOptions={{
        //headerShown: false,
        title: null,
      }}
      >
        <HelpStack.Screen 
        name="NotificationSreen" 
        component={HelpScreen}
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
        }}
        />
      </HelpStack.Navigator>
);


const AboutUsStackScreen = ({navigation}) =>(
  <AboutUsStack.Navigator
      screenOptions={{
        //headerShown: false,
        title: null,
      }}
      >
        <AboutUsStack.Screen 
        name="NotificationSreen" 
        component={AboutUsScreen}
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
        }}
        />
      </AboutUsStack.Navigator>
);