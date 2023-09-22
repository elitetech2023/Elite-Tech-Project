import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CancelButtonPopUp from './Components/CancelButtonPopUp';

const bookingsData = [
  { id: '1', reason: 'Depression', time: '08h00', date: '19 June 2023', note: 'I have always believed, and I still believe, that whatever good or bad' },
];

const MyBookingsScreen = ({navigation}) => {

    const [showPopUp, setShowPopUp] = useState(false);

    const handleCancel = (confirmed) => {
      if (confirmed) {
        // Handle cancel action
        
        console.log('Cancel confirmed');
      }
  
      // Close the pop-up
      setShowPopUp(false);
    };

  const [bookings, setBookings] = useState(bookingsData);

  const renderBookings = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.reason}</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardText}>Date: {item.date}</Text>
          <Text style={styles.cardText}>Time: {item.time}</Text>
          <Text style={styles.cardText}>Note: {item.note}</Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity onPress={() => setShowPopUp(true)}>
            <AntDesign name="delete" size={24} color="red" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  const handleCancelBooking = (id) => {
    setBookings((prevBookings) => prevBookings.filter((entry) => entry.id !== id));
  };

  return (
    <View style={styles.container}>
        <Text style={styles.header}>My Bookings</Text>
      <FlatList
        data={bookingsData}
        renderItem={renderBookings}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BookingScreen")}>
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>
      <CancelButtonPopUp visible={showPopUp} onCancel={handleCancel} />
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
  header : {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 15,
  },
});

export default MyBookingsScreen;