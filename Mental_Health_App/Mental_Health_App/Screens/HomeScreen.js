import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The best way to predict the future is to create it. - Peter Drucker",
  "''You don’t have to control your thoughts. You just have to stop letting them control you.'' — Dan Millman",
];

function HomeScreen({navigation}) {

  const [quote, setQuote] = useState('The only way to do great work is to love what you do. - Steve Jobs');

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setQuote(randomQuote);
    }, 60000);

    return () => {
      clearInterval(quoteInterval);
    };
  }, []);

    const Boxes = () => {
      return (
        <View style={styles.BoxContainer}>
          <View style={styles.box}>
            <TouchableOpacity 
            style={styles.inner}
            onPress={() => navigation.navigate("AIChatBot")}>
            <Image 
            source={require("../assets/Robot.png")}
            style={styles.logoPhone} />
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity 
            style={styles.inner}
            onPress={() => navigation.navigate("GamesScreen")}>
            <Image 
            source={require("../assets/joy_stick.png")}
            style={styles.logo} />
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity 
            style={styles.inner}
            onPress={() => navigation.navigate("MusicScreen")}>
            <Image 
            source={require("../assets/headphone.png")}
            style={styles.logoPhone} />
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <TouchableOpacity 
            style={styles.inner}
            onPress={() => navigation.navigate("QuizScreen")}>
            <Image 
            source={require("../assets/stress_meter.png")}
            style={styles.logoPhone} />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    return (
      <View>
        <View style={{
               backgroundColor:"#00a46c",
               height:"38%",
               borderBottomLeftRadius:64,
               borderBottomRightRadius:64,
               paddingHorizontal:20
           }}>
              <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                  <View>
                      <Text style={{
                        fontSize:28,
                        color:"#E6E2E2",
                        fontWeight:"bold"
                      }}>Hi Melisa</Text>
                  </View>
              </View>
        </View>
        <View
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45,
                paddingHorizontal:30,
            }}
           >
               <View style={{
                   backgroundColor:"#FFFAFA",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderColor: '#ECEFF1',
                   borderRadius:37,
                   shadowColor: '#000',
                   shadowOffset: {
                    width: 0,
                    height: 1,
                   },
                   shadowOpacity: 0.22,
                   shadowRadius: 2.22,
                   elevation: 3,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center",
                   width:260,
                   height: 50
               }}>
                   <Text style={{fontSize:9,}}>{quote}</Text>
               </View>
               <TouchableOpacity 
               style={styles.button}
               onPress={() => navigation.navigate("MemeCreator")}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>CREATE MEMES</Text>
                </TouchableOpacity>
            <Boxes />
          </View>
            
      </View>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
    BoxContainer: {
      height: 350,
      width: "100%",
      padding: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    box : {
      width: '50%',
      height: '50%',
      padding: 5,
      backgroundColor: '#F1F1F1',
    },
    inner : {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 17,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    button : {
      width: 150,
      padding: 10,
      alignItems: 'center',
      marginLeft:'25%',
      backgroundColor: '#FF832B',
      marginTop: 10,
      marginBottom: 15,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.52,
      shadowRadius: 3.22,
      elevation: 3,
    },
    logo : {
      width: 150,
      height: 150,
    },
    logoPhone : {
      width: 120,
      height: 120,
    }
});