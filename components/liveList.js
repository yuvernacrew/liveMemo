import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Moment from 'moment';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    borderColor: '#3C3C3C',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const ListItem = ({title, artist, date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailContainer}>
        <View style={styles.detail}>
          <MaterialIcons name="person" size={24} color="gray" />
          <Text style={styles.artist}>{artist}</Text>
        </View>
        <View style={styles.detail}>
          <MaterialIcons name="access-time" size={24} color="gray" />
          <Text style={styles.date}>{Moment(date).format('YYYY/MM/DD')}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
