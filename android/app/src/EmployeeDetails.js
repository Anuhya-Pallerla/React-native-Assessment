import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmployeeDetails = ({ employeeName }) => {
  const [activeTab, setActiveTab] = useState('projects');

  const renderContent = () => {
    switch (activeTab) {
      case 'techStack':
        return <TechStackDetails />;
      case 'projects':
        return <Projects />;
      case 'orgStructure':
        return <OrgStructure />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f4f8',display:'flex' ,alignItems: 'center' }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{employeeName}</Text>
      </View>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setActiveTab('techStack')} style={[styles.tab, activeTab === 'techStack' && styles.activeTab]}>
          <Text style={styles.tabText}>Tech Stack Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('projects')} style={[styles.tab, activeTab === 'projects' && styles.activeTab]}>
          <Text style={styles.tabText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('orgStructure')} style={[styles.tab, activeTab === 'orgStructure' && styles.activeTab]}>
          <Text style={styles.tabText}>Org Structure</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {renderContent()}
      </View>
    </View>
  );
};

// Tech Stack Details Component
const TechStackDetails = () => (
  <View style={styles.scene}>
    <Text style={styles.detailsTitle}>Primary Skills:</Text>
    <Text>JavaScript, React, Node.js</Text>
    <Text style={styles.detailsTitle}>Secondary Skills:</Text>
    <Text>Recat Native</Text>
  </View>
);

// Projects Component
const Projects = () => (
  <View style={styles.scene}>
    <Text style={styles.detailsTitle}>List of Projects:</Text>
    <Text>- Assessment Tool</Text>
    <Text>- Checklist Automation</Text>
    <Text>- Review Genie</Text>
  </View>
);

// Org Structure Component
const OrgStructure = () => (
  <View style={styles.scene}>
    <Text style={styles.detailsTitle}>Reporting Structure:</Text>
    <Text>L1: Sai kumar</Text>
    <Text>L2: Ranjith</Text>
    <Text>Junior Employees:</Text>
    <Text>- Junior 1</Text>
    <Text>- Junior 2</Text>
  </View>
);

const styles = StyleSheet.create({
 
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#f0f4f8', // Background color for inactive tabs
  },
  activeTab: {
    backgroundColor: 'gray', // Background color for active tab
  },
  tabText: {
    color: 'black',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  scene: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2, // Shadow for content area
    marginVertical: 10,
  },
  detailsTitle: {
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 16,
    color: '#333', // Darker text for better readability
  },
});

export default EmployeeDetails;
