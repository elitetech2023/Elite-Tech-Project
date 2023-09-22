import React, { useState, useEffect } from 'react';

/* Install and import the NavigationContainer dependency which
 is responsible for managing your app state and linking your 
 top-level navigator to the app environment.*/
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from './Splash Screen/Splash';
import OnboardingScreen from './Onboarding/OnboardingScreen';
import Login from './Login/Login';
import SignUp from './Login/SignUpPage';
import ForgotPassword from './Login/ForgotPasswordPage';
import MainScreen from './MainScreen';
import QuizScreen from './Screens/Quiz';
import GamesScreen from './Screens/GamesScreen';
import AIChatBot from './Screens/AIChatbot';
import MemeCreator from './Screens/MemeCreator';
import MusicScreen from './Screens/MusicScreen';
import AddPostScreen from './Screens/Components/AddPostScreen';
import DairyPostScreen from './Screens/Components/DairyPostScreen';
import BookingScreen from './Screens/BookingScreen';
import GameBoard from './Screens/Components/TicTacToe';
import MemoryGame from './Screens/MemoryGame/MemoryGame';
import PuzzleGame from './Screens/Components/PuzzleGame';
import MineSwipperGame from './Screens/MineswipperGame/MineSwipperGame';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={Splash} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name='Screen'component={MainScreen} />
      <Stack.Screen name='MemeCreator'component={MemeCreator}/>
      <Stack.Screen name='AIChatBot'component={AIChatBot}/>
      <Stack.Screen name='QuizScreen'component={QuizScreen}/>
      <Stack.Screen name='GamesScreen'component={GamesScreen}/>
      <Stack.Screen name='MusicScreen'component={MusicScreen}/>
      <Stack.Screen name='AddPost'component={AddPostScreen} />
      <Stack.Screen name='DairyPostScreen' component={DairyPostScreen} />
      <Stack.Screen name='BookingScreen' component={BookingScreen} />
      <Stack.Screen name='GameBoard' component={GameBoard} />
      <Stack.Screen name='MemoryGame' component={MemoryGame} />
      <Stack.Screen name='PuzzleGame' component={PuzzleGame} />
      <Stack.Screen name='MineSwipperGame' component={MineSwipperGame} />
    </Stack.Navigator>
  );
}

export default ()=>{
  return(
  <NavigationContainer>
    <App/>
  </NavigationContainer>
)
}



