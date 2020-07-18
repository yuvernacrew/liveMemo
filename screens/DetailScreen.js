import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, Text} from 'react-native';
import Moment from 'moment';
import SetList from '../components/SetList';
import LiveDetail from '../components/LiveDetail';

export default ({route}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <LiveDetail
        title={data.title}
        artist={data.artist}
        place={data.place}
        date={Moment(data.date).format('YYYY/MM/DD')}
        comment={data.comment}
      />
      <FlatList
        data={data.setList}
        renderItem={({item, index}) => (
          <SetList title={item.title} comment={item.comment} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
