import React, {useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet ,
    ImageBackground,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {

  const data = [
    { day: 'Mon', stressLevel: 1 },
    { day: 'Tue', stressLevel: 1.5 },
    { day: 'Wed', stressLevel: 2.2 },
    { day: 'Thu', stressLevel: 5.1 },
    { day: 'Fri', stressLevel: 4.5 },
    { day: 'Sat', stressLevel: 3.2 },
    { day: 'Sun', stressLevel: 2.1 },
  ];

  const stressLevels = data.map((item) => item.stressLevel);
  const labels = data.map((item) => item.day);

  const [image, setImage] = useState('https://www.citypng.com/public/uploads/preview/profile-user-round-black-icon-symbol-hd-png-11639594326nxsyvfnkg9.png');


  return (
     <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
                    <View >
                      <View 
                        style= {{alignItems: 'center',
                        backgroundColor: '#00a46c',
                        height: 115,
                        width: 360, 
                        borderBottomLeftRadius:40, 
                        borderBottomRightRadius:40,}}>
                    
                
                  <View
                        style={{
                            height: 115,
                            width: 115,
                            borderRadius: 500,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 50,
                            backgroundColor: '#FCA311',
                          }}>
                                  
                    <ImageBackground 
                        source={{uri: image}}
                        style={{height:100, width: 100, marginTop: 1}}
                        imageStyle={{borderRadius: 50}}>
                    </ImageBackground>
                    </View>                    
                            
                  </View>

                  <View style={[styles.action, {marginLeft: 20, marginTop: 60, marginBottom: 2}]}>
                    <Text style={{marginLeft: 90, marginTop:10, fontSize: 20,  fontWeight: 'bold'}}>Melisa Hlophe</Text>
                  </View>
                  
                  <View style={[styles.action, {marginLeft: 20}]}>
                  <FontAwesome name="building" color="#333333" size={16} style={{marginTop:3, marginLeft: 113}}/>
                  <Text style={{marginLeft: 10, fontSize: 15, fontWeight: 'bold'}}>APB</Text>
                   </View>

                  <View style={[styles.action, {marginLeft: 2, marginTop: 5,  marginBottom: 5}]}>
                  <FontAwesome name="phone" color="#333333" size={19} style={{marginTop:2, marginLeft: 113}} />
                  <Text style={{marginLeft: 10, fontSize: 15, fontWeight: 'bold'}}>0722067011</Text>
                  </View>

                  <View style={[styles.action, { marginTop: 5,  marginBottom: 5}]}>
                  <FontAwesome name="phone" color="#333333" size={19} style={{marginTop:2, marginLeft: 113}} />
                  <Text style={{marginLeft: 10, fontSize: 15, fontWeight: 'bold'}}>BIT 3rd Year</Text>
                  </View>
                  
                  
              <TouchableOpacity style={styles.Button} 
               onPress={() => navigation.navigate("EditProfile")}
              >
                  <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>

          </View>
       </View>
     </ScrollView>
  );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  Button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#00a46c',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButtonTitle:{
    color: "white",
    fontWeight: "bold",
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#6A0DAD',
    alignItems: 'center',
    marginVertical: 7,
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth:1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop:10,
    paddingLeft: 20,
    color: '#05375a',
  },
  action2:{
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    paddingLeft: 19,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  barContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  bar: {
    width: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    flexDirection: 'row',
    height: 200,
    width: '80%',
  },
  labelsContainer: {
    marginTop: 10,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: 12,
    color: 'black',
  },
});
