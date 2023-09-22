import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

function NotificationScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>NOTIFICATIONS</Text>
        <TouchableOpacity  style={styles.block}>
            <Text style={{color: '#FF832B', fontSize: 19}}>Time Matters!</Text>
            <Text style={{fontStyle: 'italic', fontSize: 11}}>Being a university student is exciting! There is a 
                lot to do and many people to meet. However, all of this 
                will require a lot of your time as well..... </Text>
            <Text style={{textAlign: 'right'}}>27 January 2023</Text>
            <View style={{height: 2, backgroundColor: '#00a46c', marginTop: 5}}></View>

            <Icon
            name="ios-chevron-forward-sharp" 
            size={25}
            style={{position: 'absolute', right: -20, bottom: 30, color: '#FF832B'}}
            ></Icon>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.block}>
            <Text style={{color: '#FF832B', fontSize: 19}}>No working on weekends</Text>
            <Text style={{fontStyle: 'italic', fontSize: 11}}>
                Hy everyone please note 
            that on the 20th of January it's a public holiday 
            therefore we are not opening </Text>
            <Text style={{textAlign: 'right'}}>20 January 2023</Text>
            <View style={{height: 2, backgroundColor: '#00a46c', marginTop: 5}}></View>

            <Icon
            name="ios-chevron-forward-sharp" 
            size={25}
            style={{position: 'absolute', right: -20, bottom: 30, color: '#FF832B'}}
            ></Icon>
        </TouchableOpacity>
      </View>
    );
  }

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F4F4',
    },
    header: {
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        paddingTop: 10,
        color: '#030303',
    },
    block: {
        marginRight: 45,
        marginLeft: 35,
        marginTop: 15,
    }
});