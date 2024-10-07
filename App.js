import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './android/app/src/Login'; // Ensure correct path
import OTPVerificationScreen from './android/app/src/OtpVerification'; // Ensure correct path
import BottomBar from './android/app/src/Bottombar'; // Ensure correct path for Bottom Bar
import Dashboard from './android/app/src/Dashboard'; // Ensure correct path
import VerticalDetails from './android/app/src/VerticalDetails'; // Import VerticalDetails

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update state on successful login
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Conditional rendering based on login state */}
        {/* {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />}
            </Stack.Screen>
            <Stack.Screen name="OTPVerification">
              {(props) => <OTPVerificationScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
          </>
        ) : (
          <> */}
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />}
            </Stack.Screen>
            <Stack.Screen name="OTPVerification">
              {(props) => <OTPVerificationScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="BottomBar" component={BottomBar} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="VerticalDetails" component={VerticalDetails} />
          {/* </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
