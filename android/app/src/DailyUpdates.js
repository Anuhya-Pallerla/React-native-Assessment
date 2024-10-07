// DailyUpdates.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PostScreen from './PostScreen';
import PostList from './PostList'; // Import PostList component

const DailyUpdates = () => {
  const [selectedTab, setSelectedTab] = useState('Posts'); // Default selected tab
  const [isModalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState([]); // Holds the posts data
  const [events, setEvents] = useState([]); // Holds the events data

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleAddPost = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      </View>

      <PostList
        posts={posts}
        setPosts={setPosts}
        events={events}
        setEvents={setEvents}
        selectedTab={selectedTab} // Pass the selected tab
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddPost}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {isModalVisible && (
        <PostScreen
          route={{ params: { setPosts, setEvents } }}
          onClose={() => setModalVisible(false)} // Close the modal
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tabButton: {
    padding: 10,
  },
  activeTab: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  inactiveTab: {
    fontSize: 18,
    color: 'grey',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#007BFF',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default DailyUpdates;
