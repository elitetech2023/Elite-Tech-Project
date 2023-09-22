import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DairyPostScreen = ({navigation}) => {
  const [text, setText] = useState('');

  const handleSave = () => {
    // Save the dairy post to the database or local storage
    // Redirect to the dairy screen
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={35} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Create Dairy</Text>
      </View>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your thoughts here..."
        placeholderTextColor="#C7C7CD"
        value={text}
        onChangeText={setText}
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleSave}>
          <Ionicons name="checkmark" size={32} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setText('')}>
          <Ionicons name="close" size={32} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
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
  input: {
    flex: 1,
    fontSize: 18,
    lineHeight: 24,
    color: '#000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 0,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default DairyPostScreen;
