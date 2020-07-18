import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Moment from 'moment';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderColor: '#3C3C3C',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  detailContainer: {
    flexDirection: 'row',
    borderColor: '#3C3C3C',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    marginRight: 4,
  },
  arrow: {},
});

const ListItem = ({title, artist, date}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detailContainer}>
          <View style={styles.detail}>
            <MaterialIcons
              style={styles.icon}
              name="person"
              size={20}
              color="gray"
            />
            <Text style={styles.artist}>{artist}</Text>
          </View>
          <View style={styles.detail}>
            <MaterialIcons
              style={styles.icon}
              name="access-time"
              size={20}
              color="gray"
            />
            <Text style={styles.date}>{Moment(date).format('YYYY/MM/DD')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.arrow}>
        <MaterialIcons name="chevron-right" size={24} color="gray" />
      </View>
    </View>
  );
};

export default ListItem;
