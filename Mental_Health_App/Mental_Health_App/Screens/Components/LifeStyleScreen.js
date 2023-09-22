import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View, Dimensions,Pressable, Image, FlatList, TouchableOpacityComponent } from 'react-native';

const DATA = [
    {
      id: '1',
      title: 'Time Matters!',
      image: require('../../assets/timematters.jpg')
    },
    {
      id: '2',
      title: 'Depression',
      image: require('../../assets/depression.jpg')
    },
    {
      id: '3',
      title: 'Strength Training',
      image: require('../../assets/happy.jpg')
    },
    {
      id: '4',
      title: 'Lack of Motivation',
      image: require('../../assets/motivation.jpg')
    },
    {
      id: '5',
      title: 'Limiting Academic Stress',
      image: require('../../assets/stress.jpg')
    },
  ];
  

export default function LifeStyleScreen({ navigation }) {

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
      );

    return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  image: {
    width: 250,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});