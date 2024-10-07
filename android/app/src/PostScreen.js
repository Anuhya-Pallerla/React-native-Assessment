import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PostScreen = ({ route }) => {
  // Destructure setPosts and setEvents from route.params
  const { setPosts, setEvents } = route.params;

  const [isPost, setIsPost] = useState(true);
  const [comment, setComment] = useState('');
  const [type, setType] = useState('Anniversary');
  const [eventType, setEventType] = useState('Open House');
  const [duration, setDuration] = useState('10 Min');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = () => {
    if (isPost) {
      const newPost = {
        id: Date.now(),
        comment,
        type,
        commentedBy: 'User', // Replace with actual user data
        commentedDate: new Date().toLocaleDateString(),
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
    } else {
      const newEvent = {
        id: Date.now(),
        eventType,
        duration,
        description,
        createdBy: 'User', // Replace with actual user data
        eventDate,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    handleReset(); // Reset fields after submit
  };

  const handleReset = () => {
    setComment('');
    setType('Anniversary');
    setEventType('Open House');
    setDuration('10 Min');
    setDescription('');
    setEventDate('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.tab, isPost && styles.activeTab]}
          onPress={() => setIsPost(true)}
        >
          <Text style={styles.tabText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, !isPost && styles.activeTab]}
          onPress={() => setIsPost(false)}
        >
          <Text style={styles.tabText}>Event</Text>
        </TouchableOpacity>
      </View>
      {isPost ? (
        <View>
          <TextInput
            placeholder="Comment"
            value={comment}
            onChangeText={setComment}
            maxLength={1000}
            style={styles.input}
          />
          <Picker selectedValue={type} onValueChange={(itemValue) => setType(itemValue)}>
            <Picker.Item label="Anniversary" value="Anniversary" />
            <Picker.Item label="Birthday" value="Birthday" />
          </Picker>
        </View>
      ) : (
        <View>
          <Picker selectedValue={eventType} onValueChange={(itemValue) => setEventType(itemValue)}>
            <Picker.Item label="Open House" value="Open House" />
            <Picker.Item label="One DE Meeting" value="One DE Meeting" />
            <Picker.Item label="Internal Team Meeting" value="Internal Team Meeting" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
          <Picker selectedValue={duration} onValueChange={(itemValue) => setDuration(itemValue)}>
            {['10 Min', '15 Min', '20 Min', '25 Min', '30 Min'].map((time) => (
              <Picker.Item key={time} label={time} value={time} />
            ))}
          </Picker>
          <TextInput
            placeholder="Event Description"
            value={description}
            onChangeText={setDescription}
            style={styles.input}
            maxLength={1000}
          />
          <TextInput
            placeholder="Event Date/Time"
            value={eventDate}
            onChangeText={setEventDate}
            style={styles.input}
          />
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007BFF', // Active tab color
  },
  tabText: {
    fontSize: 14, // Smaller font size for tab text
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8, // Smaller padding
    marginBottom: 10,
    fontSize: 14, // Smaller font size for input text
  },
  button: {
    backgroundColor: '#007BFF', // Button color
    paddingVertical: 10, // Adjusted vertical padding for better button height
    paddingHorizontal: 12, // Smaller horizontal padding
    borderRadius: 5,
    marginVertical: 10, // Increased vertical margin to give space around buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Slightly larger font size for button text
    textAlign: 'center',
  },
  picker: {
    height: 50, // Set a proper height for the dropdown
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 14, // Standard font size for dropdown text
  },
});


export default PostScreen;
