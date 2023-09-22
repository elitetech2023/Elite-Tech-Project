import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    ImageBackground,
    Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

const Login = ({navigation}) => {
  return (
    <View style={[styles.container,{ backgroundColor: '#ffffff' }]}>
        
    <ImageBackground
        style={styles.stretch}
        source={require('../assets/UJ_APK-2.png')}
    >
    </ImageBackground>

    <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: '#fffafa'}]}
        //The white bottom slide
    >
      
    <Text style={styles.text_header}>Login</Text>

        <View style={styles.action}
        // code for the design of the user text input box
        >
            <FontAwesome  name="user-o" size={20} style={[{ marginTop: 14, marginLeft: 10, }]} />
            <TextInput 
                placeholder="Your Username"
                placeholderTextColor="#666666"
                style={[styles.textInput, { color: '#000000' }]}
                autoCapitalize="none"
            />
        </View>

        <View style={[styles.action,{ marginTop: 20, }]}
         // code for the design of the user password input box
         >
              <FontAwesome 
                  name="lock"
                  size={20}
                  style={[{ marginTop: 14, marginLeft: 10, }]}
              />
            
              <TextInput 
                placeholder="Your Password"
                placeholderTextColor="#666666"
                style={[styles.textInput, { color: '#000000' }]}
                autoCapitalize="none"
                secureTextEntry={true}
              />

              <Feather 
                  name="eye-off"
                  color="grey"
                  size={18}
                  style={[{ marginTop: 20, marginRight: 15, }]}
              />  
          </View>
         
          <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate("SignUp")}
                >
                <Text style={styles.TextBlue}>Dont have an account? sign up </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
                >
                <Text style={styles.TextRed}>Forgot Password? </Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => navigation.navigate("Screen")}
                >
                  <View style={styles.ButtonLogin}>
                      <Text style={[styles.Textbutton,{color: '#fffafa', fontWeight: 'bold'}]}>Login</Text>
                  </View>
                </TouchableOpacity>
          </View>

          <View style={styles.ChooseoptionView}>
          <Text style={styles.signinchoice}> or sign in with </Text>

                <TouchableOpacity> 
                  <Image style={styles.facebook} source={require('../assets/facebook-removebg-preview.png')}></Image>
                </TouchableOpacity>
      
                <TouchableOpacity > 
                  <Image style={styles.facebook}
                  source={require('../assets/google-removebg-preview.png')}
                  >
                  </Image>
              </TouchableOpacity>

    </View>

    </Animatable.View>
</View>
  )
}

export default Login


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
      marginLeft: 120,
      paddingBottom: 30,
  },
  text_Box_style:{
  
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
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
      
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -10,
      paddingLeft: 10,
      paddingTop: 20,
      paddingBottom: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
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
  },
  TextRed: {
      marginTop: 11,
      color: '#DB2F2E',
      fontWeight: 'bold',
  },
  ButtonLogin: {
      backgroundColor: '#00a46c',
      marginTop: 30,
      borderRadius: 8,
      height: 40,
  },
  Textbutton:{
      marginTop: 10,
      marginLeft: 135,
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
  
/*
import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    ImageBackground,
    Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

function Login() {
  return (
    <View style={[styles.container,{ backgroundColor: '#ffffff' }]}>
        
        <ImageBackground
            style={styles.stretch}
            source={require('./assets/UJ_APK-2.png')}
        >
        </ImageBackground>

        <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: '#fffafa'}]}
            //The white bottom slide
        >
          
        <Text style={styles.text_header}>Login</Text>

            <View style={styles.action}
            // code for the design of the user text input box
            >
                <FontAwesome  name="user-o" size={20} style={[{ marginTop: 14, marginLeft: 10, }]} />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, { color: '#000000' }]}
                    autoCapitalize="none"
                />
            </View>

            <View style={[styles.action,{ marginTop: 20, }]}
             // code for the design of the user password input box
             >
                  <FontAwesome 
                      name="lock"
                      size={20}
                      style={[{ marginTop: 14, marginLeft: 10, }]}
                  />
                
                  <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, { color: '#000000' }]}
                    autoCapitalize="none"
                    secureTextEntry={true}
                  />

                  <Feather 
                      name="eye-off"
                      color="grey"
                      size={18}
                      style={[{ marginTop: 20, marginRight: 15, }]}
                  />  
              </View>
             
              <View>
                    <TouchableOpacity>
                    <Text style={styles.TextBlue}>Dont have an account? sign up </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Text style={styles.TextRed}>Forgot Password? </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={styles.ButtonLogin}>
                          <Text style={[styles.Textbutton,{color: '#fffafa', fontWeight: 'bold'}]}>Login</Text>
                      </View>
                    </TouchableOpacity>
              </View>

              <View style={styles.ChooseoptionView}>
              <Text style={styles.signinchoice}> or sign in with </Text>

                    <TouchableOpacity> 
                      <Image style={styles.facebook} source={require('./assets/facebook-removebg-preview.png')}></Image>
                    </TouchableOpacity>
          
                    <TouchableOpacity> 
                      <Image style={styles.facebook}
                      source={require('./assets/google-removebg-preview.png')}
                      >
                      </Image>
                  </TouchableOpacity>

        </View>

        </Animatable.View>
    </View>
  )
}

export default Login

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
    marginLeft: 120,
    paddingBottom: 30,
},
text_Box_style:{

},
text_footer: {
    color: '#05375a',
    fontSize: 18
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
    
},
actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
},
textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -10,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#05375a',
},
errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
button: {
    alignItems: 'center',
    marginTop: 50
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
},
TextRed: {
    marginTop: 11,
    color: '#DB2F2E',
    fontWeight: 'bold',
},
ButtonLogin: {
    backgroundColor: '#FF832B',
    marginTop: 30,
    borderRadius: 8,
    height: 40,
},
Textbutton:{
    marginTop: 10,
    marginLeft: 135,
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

*/