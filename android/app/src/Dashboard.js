import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const verticals = [
  { id: '1', name: 'DE', employeeCount: 20, logo: require('../assets/DE.png') },
  { id: '2', name: 'CDE', employeeCount: 15, logo: require('../assets/DE.png') },
  { id: '3', name: 'Heritage', employeeCount: 10, logo: require('../assets/DE.png') },
  { id: '4', name: 'HR', employeeCount: 25, logo: require('../assets/HR.jpg') },
  { id: '5', name: 'Talent Acquisition', employeeCount: 18, logo: require('../assets/TalentAcquistion.png') },
];

const Dashboard = ({ navigation }) => {
  const renderVerticalItem = ({ item }) => (
    <TouchableOpacity
      style={styles.verticalCard}
      onPress={() => navigation.navigate('VerticalDetails', { verticalId: item.id })}>
      <Image source={item.logo} style={styles.logo} />
      <View style={styles.verticalInfo}>
        <Text style={styles.verticalName}>{item.name}</Text>
        <Text style={styles.employeeCount}>{item.employeeCount} Employees</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Organization Verticals</Text>
      <FlatList
        data={verticals}
        renderItem={renderVerticalItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false} // Disable vertical scroll indicator for cleaner UI
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eef2f4', // Light background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark color for the header
  },
  verticalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#ffffff', // White background for cards
    borderRadius: 10,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 2, // For Android shadow effect
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 10, // Rounded corners for the logo
  },
  verticalInfo: {
    flex: 1, // Allow name and count to take remaining space
  },
  verticalName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50', // Darker color for vertical names
  },
  employeeCount: {
    marginTop: 5,
    color: '#7f8c8d', // Lighter color for employee count
  },
});

export default Dashboard;
