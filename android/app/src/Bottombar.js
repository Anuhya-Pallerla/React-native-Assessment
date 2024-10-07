import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import ProfileScreen from './ProfileScreen'; // Ensure correct path
import EmployeeListScreen from './Employeelist'; // Ensure the path matches your file structure
import EmployeeDetailsScreen from './EmployeeDetails'; // Ensure correct path
import Dashboard from './Dashboard'; // Ensure correct path
import DailyUpdates from './DailyUpdates'; // Ensure correct path

// Create the bottom tab navigator and employee stack navigator
const Tab = createBottomTabNavigator();
const EmployeeStack = createNativeStackNavigator();

// Employee stack with Employee List and Employee Details
function EmployeeStackScreen() {
  return (
    <EmployeeStack.Navigator>
      <EmployeeStack.Screen 
        name="EmployeeList" 
        component={EmployeeListScreen} 
        options={{ title: 'Employee List' }} 
      />
      <EmployeeStack.Screen 
        name="EmployeeDetails" 
        component={EmployeeDetailsScreen} 
        options={{ title: 'Employee Details' }} 
      />
    </EmployeeStack.Navigator>
  );
}

export default function BottomBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconSource;

          // Dynamically set icon based on route name
          if (route.name === 'Profile') {
            iconSource = require('../assets/profile.png'); // Profile icon
          } else if (route.name === 'Employees') {
            iconSource = require('../assets/people.png'); // Employees icon
          } else if (route.name === 'Dashboard') {
            iconSource = require('../assets/dashboard.png'); // Dashboard icon
          } else if (route.name === 'DailyUpdates') {
            iconSource = require('../assets/updates.png'); // Daily updates icon
          }

          // Return the Image component for the tab icon
          return (
            <Image 
              source={iconSource} 
              style={{ 
                width: focused ? size + 5 : size, 
                height: focused ? size + 5 : size,
                tintColor: focused ? 'tomato' : 'gray' // Change icon color based on focus
              }} 
            />
          );
        },
        tabBarActiveTintColor: 'tomato', // Active tab text color
        tabBarInactiveTintColor: 'gray', // Inactive tab text color
        tabBarStyle: { 
          backgroundColor: '#fff', 
          paddingBottom: 10, 
          height: 60, 
          paddingTop: 5 
        }, // Tab bar style
        tabBarLabelStyle: { fontSize: 12 }, // Label text size
        tabBarIconStyle: { marginTop: 5 } // Add spacing for icon
      })}
    >
      {/* Tab for Profile Screen */}
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profile', headerShown: false }} 
      />

      {/* Tab for Employees (stack navigation for Employee List & Employee Details) */}
      <Tab.Screen 
        name="Employees" 
        component={EmployeeStackScreen} 
        options={{ title: 'Employees', headerShown: false }} 
      />

      {/* Tab for Dashboard */}
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ title: 'Dashboard', headerShown: false }} 
      />

      {/* Tab for Daily Updates */}
      <Tab.Screen 
        name="DailyUpdates" 
        component={DailyUpdates} 
        options={{ title: 'Daily Updates', headerShown: false }} 
      />
    </Tab.Navigator>
  );
}
