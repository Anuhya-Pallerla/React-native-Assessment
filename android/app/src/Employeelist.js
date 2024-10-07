import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Import your local image
const iconSource = require('../assets/people.png');

const employees = [
  { id: '1', name: 'Anuhya Pallerla', designation: 'Programmer Analyst' },
  {id :'2', name :'Divya Ragi',designation:'Programmer Analyst'},
  { id: '3', name: 'Kiruba', designation: 'Project Manager' },
  // Add more employees as needed
];

const EmployeeListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('EmployeeDetails', { employeeId: item.id })}
      style={styles.card}
    >
      {/* Use Image component instead of Ionicons */}
      <Image source={iconSource} style={styles.icon} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.designation}>{item.designation}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Employee List</Text>
      <FlatList
        data={employees}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background color
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    width: 24,  // Set width for the icon
    height: 24, // Set height for the icon
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  designation: {
    fontSize: 14,
    color: 'gray',
  },
});

export default EmployeeListScreen;
