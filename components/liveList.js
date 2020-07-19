import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import Moment from 'moment';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: '#607D8B',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
    paddingLeft: 4,
  },
  detailContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#3C3C3C',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  icon: {
    marginRight: 4,
  },
  arrow: {},
});

const ListItem = ({title, artist, date, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
              name="date-range"
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
    </TouchableOpacity>
  );
};

export default ListItem;
