import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: '#888',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
  },
  comment: {
    color: '#666',
  },
});

const SetList = ({title, comment, index}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {index + 1}. {title}
      </Text>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

export default SetList;
