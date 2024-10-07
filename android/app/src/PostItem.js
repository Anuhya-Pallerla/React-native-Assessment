// PostItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostItem = ({ item, type }) => {
  return (
    <View style={styles.container}>
      {type === 'Posts' ? (
        <>
          <Text style={styles.comment}>{item.comment}</Text>
          <Text style={styles.meta}>
            {item.commentedBy} - {item.commentedDate}
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.eventType}>{item.eventType}</Text>
          <Text style={styles.meta}>
            {item.createdBy} - {item.eventDate}
          </Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.duration}>{item.duration}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  comment: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
  },
  duration: {
    marginTop: 5,
    fontStyle: 'italic',
  },
  meta: {
    fontSize: 12,
    color: 'gray',
  },
});

export default PostItem;
