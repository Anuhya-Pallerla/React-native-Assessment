// ProfileScreen.js
import {React, useState} from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';

const ProfileScreen = ({navigation ,setIsLoggedIn}) => {
    const [email, setEmail] = useState('');

    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                { text: "Cancel", style: "cancel" },
                { 
                    text: "OK", 
                    onPress: () => {                        
                        navigation.navigate('Login', { email });// Ensure this matches the registered screen name
                    } 
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Profile Information</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.text}>Username: <Text style={styles.bold}>John Doe</Text></Text>
                <Text style={styles.text}>Login Time: <Text style={styles.bold}>09:00 AM</Text></Text>
                <Text style={styles.text}>Active Hours: <Text style={styles.bold}>8 hours</Text></Text>
                <Text style={styles.text}>Logout Time: <Text style={styles.bold}>05:00 PM</Text></Text>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8', // Light gray background
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    infoContainer: {
        backgroundColor: '#fff', // White background for info section
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.22,
        elevation: 3, // For Android shadow
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        color: '#333', // Dark text color
    },
    bold: {
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: 'blue', // Red button color
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#fff', // White text for button
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
