import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    ImageBackground,

} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const ForgotPassword = ({navigation}) => {
  return (
        <View style={[styles.container,{ backgroundColor: '#ffffff'}]}>
       
        <ImageBackground
            style={styles.stretch}
            source={require('../assets/UJ_APK-2.png')}
        >
        </ImageBackground>

        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: '#fffafa'
            }]}
            //The white bottom slide
        >
        
        <Text style={styles.text_header}>Forgot Password</Text>

              <View style={styles.action}
              // code for the design of the user text input box
              >
              <FontAwesome name="envelope" size={20} style={[{ marginTop: 14, marginLeft: 10, }]}/>
              <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: '#000000'
                    }]}
                    autoCapitalize="none"
              />
              </View>

             
              <View>
              <TouchableOpacity>
              <View style={styles.ButtonLogin}>
              <Text style={[styles.Textbutton,{color: '#fffafa', fontWeight: 'bold',}]}>Send</Text>
              </View>
              </TouchableOpacity>
              </View>

              <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              >
                  <Text style={styles.TextBlue}>
                  Go to Login
                  </Text>
              </TouchableOpacity>

        </Animatable.View>
        </View>
  );
}

export default ForgotPassword

const styles = StyleSheet.create({
      container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 50,
        paddingBottom: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
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
        
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -10,
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 10,
        color: '#05375a',
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    stretch: {
        flex: 1,
        width: 380,
        height: 300,
    },
    TextBlue: {
        marginTop: 11,
        color: '#0000ff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    TextRed: {
        marginTop: 11,
        color: '#DB2F2E',
        fontWeight: 'bold',
    },
    ButtonLogin: {
        backgroundColor: '#00a46c',
        marginTop: 10,
        borderRadius: 8,
        height: 50,
    },
    
    Textbutton:{
        marginTop: 15,
        marginLeft: 140,
    },
    facebook: {
        height: 20,
        width: 20,
        marginLeft: 20,
        marginTop: 20,
    },
    google: {
        height: 70,
        width: 70,
        marginLeft: 20,
        marginTop: 20,
    },
    signinchoice:{
        marginTop: 20,
    },
    ChooseoptionView:{
        flexDirection: 'row',
    },
  });
