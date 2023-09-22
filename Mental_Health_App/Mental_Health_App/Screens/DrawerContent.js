import React from 'react';
import {View, StyleSheet, TouchableOpacity, Linking} from "react-native";

/* Paper is a collection of customizable and production-ready 
components for React Native, following Google’s Material Design guidelines.*/
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

// Install and import react native drawer 
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Ionic from 'react-native-vector-icons/Ionicons';

export function DrawerContent(props){
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.BackGround}>
                        <View style={styles.userInfoSection}>
                            <View style={{marginTop: 15, 
                                backgroundColor: '#E07307', 
                                borderRadius: 50,
                                }}>
                                <Avatar.Image
                                    source={{
                                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GhyeRCrZKqtN9dIZzm1cWi0kBuUTTlA3KI7jFS9k&s"
                                    }}
                                    size={100}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Title style={styles.title}>Melisa Hlophe</Title>
                            <Caption style={styles.caption}>melisa72@gmail.com</Caption>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color,size}) =>
                                <Ionic name="home-outline" size={size} color={color} />
                            }
                            label="Home"
                            onPress={() =>{props.navigation.navigate('Home')}}
                        />

                        <DrawerItem
                            icon={({color,size}) =>
                                <Ionic name="person-outline" size={size} color={color} />
                            }
                            label="Account"
                            onPress={() =>{props.navigation.navigate('Profile')}}
                        />

                        <DrawerItem
                            icon={({color,size}) =>
                                <Ionic name="people-outline" size={size} color={color} />
                            }
                            label="About Us"
                            onPress={() =>{props.navigation.navigate('About Us')}}
                        />

                        <DrawerItem
                            icon={({color,size}) =>
                                <Ionic name="help-circle-outline" size={size} color={color} />
                            }
                            label="Help"
                            onPress={()=>{props.navigation.navigate('Help')}}
                        />

                        <DrawerItem
                            icon={({color,size}) =>
                                <Ionic name="key-outline" size={size} color={color} />
                            }
                            label="Change Password"
                            onPress={()=>{}}
                        />

                        <DrawerItem
                            icon={({color,size}) =>
                                <Ionic name="ios-trash-bin-sharp" size={size} color={color} />
                            }
                            label="Delete Account"
                            onPress={()=>{}}
                        />

                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) =>
                        <Ionic name="exit" size={size} color={color} />
                    }
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        textAlign:'center',
        paddingHorizontal: 91,
    },
    BackGround: {
        backgroundColor: '#00a46c',
        height: 220,
        borderBottomRightRadius: 85,
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: 'bold',
        textAlign:'center',
        color: '#FFFAFA',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 11,
        lineHeight: 14,
        textAlign:'center',
        color: '#FFFAFA'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 2
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});