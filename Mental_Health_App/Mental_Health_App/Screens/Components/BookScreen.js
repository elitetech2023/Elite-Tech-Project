import React, { useState } from 'react';
import {
    View, 
    Image, 
    Text,
    TextInput, 
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Platform,
} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';

import DateTimePicker from '@react-native-community/datetimepicker';

const countries = ["Egypt", "Canada", "Australia", "Ireland"]

function BookScreen() {

    const availableDates = ['2023-06-15', '2023-06-16', '2023-06-17']; // Available dates for booking
    const availableTimes = ['08:00', '09:00', '10:00', '11:00', '12:00']; // Available time slots for booking

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
        // Reset time when date changes
        setTime(null);
    };

    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(Platform.OS === 'ios');
        setTime(currentTime);
    };

    const showDatePickerModal = () => {
        setShowDatePicker(true);
    };

    const showTimePickerModal = () => {
        setShowTimePicker(true);
    };

    const isDateDisabled = (selectedDate) => {
        return !availableDates.includes(selectedDate.toISOString().split('T')[0]);
    };

    const isTimeDisabled = (selectedTime) => {
        return !availableTimes.includes(selectedTime.getHours().toString().padStart(2, '0'));
    };

    const handleBookAppointment = () => {
        if (date !== null && time !== null) {
        // Perform appointment booking logic here
        alert(`Appointment booked for ${date.toISOString().split('T')[0]} at ${time.getHours().toString().padStart(2, '0')}:00`);
        } else {
        alert('Please select a date and time for the appointment');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/logo.jpeg')} style={styles.logo} />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', marginTop: 6, }}>APB PSYCHAD BOOKING WITH PYSCH</Text>
                    <Image source={require('../../assets/psych.jpeg')} style={styles.lg} />
                </View>
                <View>


                    <Text style={{ marginRight: 200, fontWeight: 'bold', marginBottom: 6 }}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Name"

                    />

                    <Text style={{ marginRight: 200, fontWeight: 'bold', marginBottom: 6 }}>Surname</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Surname"

                    />

                    <Text style={{ marginRight: 200, fontWeight: 'bold', marginBottom: 6 }}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Email"

                    />

                    <Text style={{ marginRight: 200, fontWeight: 'bold', marginBottom: 6 }}>Student Number:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Student Number"

                    />

                    <TouchableOpacity onPress={showDatePickerModal}>
                    <Text style={{ marginRight: 200, fontWeight: 'bold', marginBottom: 6 }}>Date:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Select Date"
                        value={date ? date.toISOString().split('T')[0] : ''}
                        editable={false}
                        />
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                        testID="datePicker"
                        value={date || new Date()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                        minimumDate={new Date()} // Set minimum date to today
                        disabled={isDateDisabled}
                        />
                    )}

                    
                    <TouchableOpacity onPress={showTimePickerModal}>
                    <Text style={{ marginRight: 200, fontWeight: 'bold', marginBottom: 6 }}>Time:</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Select Time"
                    value={time ? `${time.getHours().toString().padStart(2, '0')}:00` : ''}
                    editable={false}
                    />
                    </TouchableOpacity>
                    {showTimePicker && (
                        <DateTimePicker
                        testID="timePicker"
                        value={time || new Date()}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={handleTimeChange}
                        minuteInterval={60} // Display time slots at 1-hour intervals
                        disabled={isTimeDisabled}
                        />
                    )}

                    <Text style={{ marginRight: 100, fontWeight: 'bold', marginBottom: 6 }}>Reason For Booking:</Text>
                    <SelectDropdown
                        buttonStyle={{
                            height: 40,
                            borderColor: '#ccc',
                            paddingHorizontal: 40,
                            borderWidth: 1,
                            borderRadius: 4,
                            marginBottom: 10,
                            width: 330,
                            backgroundColor: '#D3D3D3'
                        }}
                        buttonTextStyle={{color:'grey',fontSize: 15}}
                        statusBarTranslucent={true}
                        defaultButtonText={'Select Reason For Booking'}
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />

                    <Text style={{ marginRight: 200, fontWeight: 'bold', marginBottom: 6 }}>Notes:</Text>
                    <TextInput
                        style={styles.notesInput}
                        placeholder="Add any special requests.."
                        multiline={true}
                    />


                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 280,
                    }}>
                        <Text style={{ fontSize: 10, marginTop: 5, marginBottom: 15, marginLeft: 40 }}>
                            Psych acknowledges and respects your privacy
                            We will ensure that your information is kept private.We will only share
                            your personal information on a need to know basis that
                            is lawful and reasonable.
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleBookAppointment}>
                        <Text style={styles.buttonText}>Book Appointment</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        marginBottom: 20,
    },
    logo: {
        marginTop: 20,
        width: 160,
        height: 160,
        resizeMode: 'contain',
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    info: {
        marginTop: 4,
        fontSize: 12,
        color: 'grey',
    },
    social: {
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 11,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
        shadowColor: '#52006A',
    },
    //input field styling 
    input: {
        height: 40,
        borderColor: '#ccc',
        paddingHorizontal: 40,
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        width: 330,
        backgroundColor: '#D3D3D3',
    },
    button: {
        backgroundColor: '#00a46c',
        borderRadius: 4,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    notesInput: {
        height: 79,
        borderColor: '#ccc',
        paddingHorizontal: 40,
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        width: 300,
        marginLeft: 16,
        backgroundColor: '#D3D3D3',
        marginBottom: 30,
    },
    lg: {
        marginLeft: 7,
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderRadius: 30,

    }
});

export default BookScreen