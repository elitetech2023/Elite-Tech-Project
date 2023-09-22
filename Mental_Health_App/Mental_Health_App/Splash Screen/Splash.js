import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image, ActivityIndicator } from 'react-native';

const Splash = ({navigation}) => {

    setTimeout(()=>{
        navigation.navigate('OnboardingScreen')
    },5000)
    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center', backgroundColor:'#00a46c'}} >
         
            <Image source={require('../assets/SplashImg.png')} style={{width:'60%',height:'20%'}}  />    
           <ActivityIndicator color="#fff" size="large" />
           
        </View>
    )
}

export default Splash;