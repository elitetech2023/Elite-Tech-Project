import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { NavigationContainer } from '@react-navigation/native'

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? '#00a46c' : '#fff';

    return (
      
        <View 
            style={{
                width:15,
                height: 15,
                marginHorizontal:3,
                backgroundColor,
                borderRadius:4
            }}
        />
       
    );
}
const Done=({...props}) =>(
  <TouchableOpacity style={{marginHorizontal:10}}
  {...props}
  >
    <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
)

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
   
        DotComponent={Dots}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#FFFAFA',
            image: <Image source={require('../assets/slide1.jpg')} style={{borderRadius:31}} />,
            title: <Text style={{maxWidth:'70%', fontFamily:'Roboto',color:"#000000",fontSize:23, textAlign:'center',paddingTop:10, fontWeight:'bold'}}>We address common mental health issues</Text>,
          },
          {
            backgroundColor: '#FFFAFA',
            image: <Image source={require('../assets/slide2.jpg')} style={{width:'90%', borderRadius:31, height:'35%'}}/>,
            title: <Text style={{maxWidth:'70%', fontFamily:'Roboto',color:"#000000",fontSize:23, textAlign:'center', fontWeight:'bold'}}>Allow users to access online talk therapy or psychiatric care</Text>,
          },
          {
            backgroundColor: '#FFFAFA',
            image: <Image source={require('../assets/slide3.jpg')} style={{borderRadius:31}}/>,
            title: <Text style={{maxWidth:'70%', fontFamily:'Roboto',color:"#000000",fontSize:23, textAlign:'center',paddingTop:10, fontWeight:'bold'}}>We are committed to promoting student mental health through various psychological interventions</Text>,
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});