// OtpVerification.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import BottomBar from './Bottombar';

const OTPVerificationScreen = ({ route, navigation, setIsLoggedIn }) => {
  const { email } = route.params; // Get the email passed from LoginScreen
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    Alert.alert('Success!', 'OTP Verified. You can now log in.'); 
  setIsLoggedIn(true); 
  navigation.navigate('BottomBar');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>A verification code has been sent to {email}</Text>

      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        style={styles.input}
        keyboardType="numeric"
        placeholderTextColor="#888" // Change placeholder color
      />

      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Resend OTP', 'OTP has been resent to your email.')} style={styles.resendButton}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666', // Light text color for subtitle
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff', // White background for input
  },
  button: {
    backgroundColor: '#007BFF', // Primary button color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Text color for button
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  resendText: {
    color: '#007BFF', // Color for resend link
    fontSize: 16,
  },
});

export default OTPVerificationScreen;
