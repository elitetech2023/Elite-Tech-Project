import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Button, Alert, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';
import * as MailComposer from 'expo-mail-composer'
import React, { useRef, useState, useEffect, KeyboardAvoidingView } from 'react';


function HelpScreen({navigation}) {
  const [name, setName] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [subject, setSubject] = useState(undefined);
  const [message, setMessage] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [status, setStatus] = useState(undefined);

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }

    checkAvailability();
  }, []);

  useEffect(() => {
    if (status === "No") {
      Alert.alert('Please allow access to your emails to proceed');

    } else if (status === "OK") {
      MailComposer.composeAsync({
        subject: subject,
        body: message,
        recipients: ["kamogelomokotedi62@gmail.com", "plzlinkme@gmail.com"]
      })

    }
    setStatus("");
  }, [status])

  const sendEmail = () => {
    Alert.alert('Redirecting', 'Can we redirect to your email app?', [
      {
        text: 'No',

        onPress: () => setStatus('No'),
        style: "cancel",
      },
      { text: 'OK', onPress: () => setStatus('OK'), style: "destructive" },
    ]);

  };

    return (
      <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.logo} source={require('../assets/uj.png')} />

        <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: '700' }}>
          Pychad Help
        </Text>

        <View style={styles.action}>
          <TextInput
            style={[styles.textInput, { color: '#000000' }]}
            placeholder={'Name'} value={name}
            onChangeText={setName} placeholderTextColor="black" />
        </View>


        <View style={styles.action}>
          <TextInput placeholder={'Subject'}
            style={[styles.textInput, { color: '#000000' }]}
            onChangeText={setSubject}
            placeholderTextColor="black" />
        </View>

        <View style={styles.action}>
          <TextInput placeholder={'Email'}
            style={[styles.textInput, { color: '#000000' }]}
            value={email}
            onChangeText={setEmail} placeholderTextColor="black"
          />
        </View>

        <View style={styles.action}>
          <TextInput
            placeholder={'Massages'}
            multiline={true}
            style={[styles.textInput,
            { color: '#000000' }]}
            onChangeText={setMessage}
            placeholderTextColor="black"
            maxLength={40}>
          </TextInput>
        </View>

        <TouchableOpacity
          style={{
            height: 50, width: '67%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00a46c',
            marginTop: '5%', alignSelf: 'center',
            borderRadius: 20,
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 3, width: 2 },
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: 8,
          }}
          onPress={sendEmail}
          title="Send">
          <Text style={{ color: 'white' }} >Send Help</Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
    );
  }

export default HelpScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',

  },
  logo: {
    height: 260,
    width: windowWidth - 100,
    resizeMode: 'cover',
    marginBottom: 5,
    marginTop: 70,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    borderTopWidth: 1,
    borderTopColor: '#808080',
    borderLeftWidth: 1,
    borderLeftColor: '#808080',
    borderRightWidth: 1,
    borderRightColor: 'f2f2f2',
    paddingBottom: 5,
    shadowColor: '#000000',
    width: windowWidth - 35,
    borderRadius: 35,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 3, width: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 8,

  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -10,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#05375a',

  },

});