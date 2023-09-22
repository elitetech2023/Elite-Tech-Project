import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    paragraphs: ['Through depression sharing your pain with your loved ones is therapeutic and mind refreshing top bottling up your feelings taking helps. '],
    date: 'May 7, 2023',
  },
  {
    id: '2',
    paragraphs: ['I have always believed, and I still believe, that whatever good or bad fortune may come our way we can always give it meaning and transform it into something of value.'],
    date: 'May 8, 2023',
  },
  {
    id: '3',
    title: 'Post 3',
    paragraphs: ['Stay positive, work hard, and success will be knocking on your door. Have faith in yourself because I have faith in you. Good luck to you. Everything seems impossible until it is done.'],
    date: 'May 9, 2023',
  },
  {
    id: '4',
    paragraphs: ["''There is a tonic strength, in the hour of sorrow and affliction, in escaping from the world and society and getting back to the simple duties and interests we have slighted and forgotten. Our world grows smaller, but it grows dearer and greater. Simple things have a new charm for us, and we suddenly realize that we have been renouncing all that is greatest and best, in our pursuit of some phantom.''―William George Jordan"],
    date: 'May 10, 2023',
  },
]

const Item = ({ title, paragraphs, date }) => (
  <View style={styles.item}>
    <FlatList
      data={paragraphs}
      renderItem={({ item }) => (
        <Text style={styles.paragraph}>{item}</Text>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    <Text style={styles.date}>{date}</Text>
  </View>
);

const JournalsScreen = ({navigation}) => {

  const renderItem = ({ item }) => (
    <Item title={item.title} paragraphs={item.paragraphs} date={item.date} />
  );
  
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddPost")}>
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  item: {
    backgroundColor: '#E6E2E2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderRadius: 20,
    elevation: 5,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  date: {
    alignSelf: 'flex-end',
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default JournalsScreen;