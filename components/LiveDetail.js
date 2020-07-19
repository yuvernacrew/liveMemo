import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const LiveDetail = ({title, artist, date, place, comment}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {!!title && <Text style={styles.title}>{title}</Text>}
        <MaterialIcons name="delete" size={24} color="black" />
      </View>

      <View style={styles.detailContainer}>
        <View>
          {!!artist && (
            <View style={styles.detail}>
              <MaterialIcons
                style={styles.icon}
                name="person"
                size={20}
                color="gray"
              />
              <Text>{artist}</Text>
            </View>
          )}
        </View>

        {!!place && (
          <View style={styles.detail}>
            <MaterialIcons
              style={styles.icon}
              name="place"
              size={20}
              color="gray"
            />
            <Text>{place}</Text>
          </View>
        )}

        {!!date && (
          <View style={styles.detail}>
            <MaterialIcons
              style={styles.icon}
              name="date-range"
              size={20}
              color="gray"
            />
            <Text>{date}</Text>
          </View>
        )}
      </View>

      <View>{!!comment && <Text style={styles.comment}>{comment}</Text>}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderColor: '#3C3C3C',
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
    backgroundColor: '#fbfbfb',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default LiveDetail;
