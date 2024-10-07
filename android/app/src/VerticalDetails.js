import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const projects = [
  { id: '1', name: 'SSO', lead: 'Mahesh', memberCount: 5 },
  { id: '2', name: 'Checklist Automation', lead: 'Sunny', memberCount: 3 },
  { id: '3', name: 'E-learning', lead: 'Sai kumar', memberCount: 4 },
];

const employees = [
  { id: '1', name: 'Anuhya', experience: '5 years', email: 'Anu@bilvantis.io' },
  { id: '2', name: 'Divya', experience: '3 years', email: 'divya@bilvantis.com' },
];

const techStacks = [
  { id: '1', name: 'React', contact: 'Sai', memberCount: 10 },
  { id: '2', name: 'React Native', contact: 'Sharief', memberCount: 8 },
];

const VerticalDetails = ({ route, navigation }) => {
  const { verticalId } = route.params;

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('Projects');

  const renderProjects = () => (
    <FlatList
      data={projects}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text>Lead: {item.lead}</Text>
          <Text>Members: {item.memberCount}</Text>
        </View>
      )}
    />
  );

  const renderEmployees = () => (
    <FlatList
      data={employees}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('EmployeeDetails', { employeeId: item.id })}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text>Experience: {item.experience}</Text>
          <Text>Email: {item.email}</Text>
        </TouchableOpacity>
      )}
    />
  );

  const renderTechStacks = () => (
    <FlatList
      data={techStacks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text>Contact: {item.contact}</Text>
          <Text>Members: {item.memberCount}</Text>
        </View>
      )}
    />
  );

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        {['Projects', 'Employees', 'Tech Stack'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={activeTab === tab ? styles.activeTab : styles.tab}>
            <Text style={activeTab === tab ? styles.activeTabText : styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      {activeTab === 'Projects' && renderProjects()}
      {activeTab === 'Employees' && renderEmployees()}
      {activeTab === 'Tech Stack' && renderTechStacks()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: '#007BFF', // Border color for the tab bar
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 10,
  },
  activeTab: {
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#007BFF', // Active tab border color
  },
  activeTabText: {
    color: '#007BFF', // Color for active tab text
    fontWeight: 'bold',
  },
  tabText: {
    color: '#555', // Color for inactive tab text
  },
  card: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // For Android shadow effect
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default VerticalDetails;
