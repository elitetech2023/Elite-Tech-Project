import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity } from 'react-native';



const Onboarding = ({navigation}) => {
    return (
        <View style={{flex:1}} >
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
           
            <View style={{flex:3,flexDirection:"column",backgroundColor:'#fff', alignItems:'center',paddingTop:10}} >
                <Image source={require('./assets/slide1.jpg')}
                style={{flex:2,width:'90%', borderRadius:35}}  />
            </View>

          
            <View style={{flex:2,backgroundColor:'#fff'}} >
             
                <View  style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#fff'}} >
                   
                    <Text style={{maxWidth:'70%', fontFamily:'Roboto',color:"#000000",fontSize:23, textAlign:'center',paddingTop:10, fontWeight:'bold'}} >
                    We address common mental health issues
                    </Text>
                </View> 




                {/* Button */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}} >
 {/* <TouchableOpacity style={{justifyContent:'center',width:'90%',backgroundColor:Colors.primary,height:50,marginBottom:30,borderRadius:10}} 
                    onPress={()=>navigation.navigate("Login")}
                    >
                        <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',fontFamily:'OpenSans-SemiBold',color:Colors.white}} >Get Started</Text>
                    </TouchableOpacity> */}
                 
                   
                    
                    

                </View>

            </View>
            
        </View>
    )
}

export default Onboarding