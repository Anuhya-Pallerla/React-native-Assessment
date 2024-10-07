// PostList.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 import PostScreen from './PostScreen'; // Adjust the import path as necessary


const PostList = ({ posts, setPosts, events, setEvents }) => { // Receive posts and events as props
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Posts');

  const renderPost = ({ item }) => (
<View style={styles.card}>
      {/* Display image based on post type */}
      {item.type === 'Birthday' && (
       <Image source={require('../assets/Birthday.jpg')} style={styles.image} />
     )}
     {item.type === 'Anniversary' && (
        <Image source={require('../assets/Anniversary.png')} style={styles.image} />
   )}
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.comment}>{item.comment}</Text>
      <Text style={styles.name}>{item.commentedBy}</Text>
      <Text style={styles.date}>{item.commentedDate}</Text>
    </View>
  );

  const renderEvent = ({ item }) => (
    <View style={styles.card}>
       
     {/* Display image based on post type */}
    {item.type === 'Birthday' && (
        <Image source={require('../assets/Birthday.jpg')} style={styles.image} />
     )}
     {item.type === 'Anniversary' && (
       <Image source={require('../assets/Anniversary.png')} style={styles.image} />
     )}
      <Text style={styles.type}>{item.eventType}</Text>
      <Text style={styles.duration}>{item.duration}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.createdBy}>{item.createdBy}</Text>
      <Text style={styles.date}>{item.eventDate}</Text>
    </View>
  );

  const handleAddPost = () => {
    navigation.navigate('PostScreen', {
      setPosts,
      setEvents,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setSelectedTab('Posts')}>
          <Text style={[styles.tab, selectedTab === 'Posts' && styles.selectedTab]}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Events')}>
          <Text style={[styles.tab, selectedTab === 'Events' && styles.selectedTab]}>Events</Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'Posts' ? (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <FlatList
          data={events}
          renderItem={renderEvent}
          keyExtractor={(item) => item.id.toString()}
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
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tab: {
    fontSize: 18,
    color: 'grey',
  },
  selectedTab: {
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  image: {
        width: 100,
        height: 100,
        marginBottom: 5, // Add margin if needed
      },
  // Add styles for other elements as needed
});

export default PostList;










