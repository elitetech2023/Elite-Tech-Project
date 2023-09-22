import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const initialDiaryEntries = [
  { id: '1', title: 'Entry 1', text: 'Through depression sharing your pain with your loved ones is therapeutic and mind refreshing top bottling up your feelings taking helps.' },
  { id: '2', title: 'Entry 2', text: 'I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.' },
  { id: '3', title: 'Entry 3', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
  { id: '4', title: 'Entry 4', text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
  { id: '5', title: 'Entry 5', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
];

const DiaryScreen = ({navigation}) => {
  const [diaryEntries, setDiaryEntries] = useState(initialDiaryEntries);

  const renderDiaryEntry = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.title}</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardText}>{item.text}</Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity onPress={() => handleEditDiaryEntry(item)}>
            <AntDesign name="edit" size={24} color="blue" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteDiaryEntry(item.id)}>
            <AntDesign name="delete" size={24} color="red" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleEditDiaryEntry = (entry) => {
    // Implement your edit functionality here
  };

  const handleDeleteDiaryEntry = (id) => {
    setDiaryEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={diaryEntries}
        renderItem={renderDiaryEntry}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DairyPostScreen")}>
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#E6E2E2',
    elevation: 5,
  },
  cardHeader: {
    borderBottomWidth: 3,
    borderBottomColor: '#FF832B',
    paddingBottom: 5,
    marginBottom: 5,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardBody: {
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF832B',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});

export default DiaryScreen;