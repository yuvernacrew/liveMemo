import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, Text} from 'react-native';
import Moment from 'moment';

export default ({route}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{data.title}</Text>
      <Text>{data.artist}</Text>
      <Text>{Moment(data.date).format('YYYY/MM/DD')}</Text>
      <Text>{data.comment}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
