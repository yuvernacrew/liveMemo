import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: '#3C3C3C',
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    backgroundColor: '#fbfbfb',
  },
  title: {
    paddingLeft: 4,
    fontSize: 24,
    marginBottom: 12,
  },
  icon: {
    marginRight: 4,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    fontSize: 16,
  },
  detailContainer: {
    marginBottom: 20,
  },
  comment: {
    color: '#333',
  },
});

const LiveDetail = ({title, artist, date, place, comment}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detail}>
          <MaterialIcons
            style={styles.icon}
            name="person"
            size={20}
            color="gray"
          />
          <Text>{artist}</Text>
        </View>
        <View style={styles.detail}>
          <MaterialIcons
            style={styles.icon}
            name="place"
            size={20}
            color="gray"
          />
          <Text>{place}</Text>
        </View>
        <View style={styles.detail}>
          <MaterialIcons
            style={styles.icon}
            name="access-time"
            size={20}
            color="gray"
          />
          <Text>{date}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
};

export default LiveDetail;
