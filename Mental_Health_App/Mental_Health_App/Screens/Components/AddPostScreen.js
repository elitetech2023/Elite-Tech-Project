import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Button} from 'react-native';
import { Header } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AddPostScreen = ({navigation}) => {
  const [postText, setPostText] = useState('');

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const handlePostTextChange = (text) => {
    setPostText(text);
  };

  const handleAddPostPress = () => {
    // TODO: handle adding post to backend
    console.log(`Added post: ${postText}`);
    setPostText('');
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={35} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Post</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          placeholder="Type Here"
          placeholderTextColor="gray"
        />

      <TouchableOpacity style={styles.button} onPress={handleAddPostPress} disabled={!postText.trim()}>
        <Text style={{color: "#E6E2E2"}}>Add Post</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  input: {
    borderWidth: 0, 
    borderColor: '#E6E2E2', 
    padding: 10, 
    margin: 10, 
    width: '90%', 
    textAlignVertical: 'center', 
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  back: {
    marginBottom: 15,
  },
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: "#FF832B",
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  }
}); 