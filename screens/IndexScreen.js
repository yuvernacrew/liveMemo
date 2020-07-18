import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import LiveList from '../components/LiveList';
import ActionButton from 'react-native-action-button';
// TODO: 仮のデータをimport
import data from '../assets/data';

export default ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <LiveList
            onPress={() => {
              navigation.navigate('Detail', {data: item});
            }}
            title={item.title}
            artist={item.artist}
            date={item.date}
          />
        )}
        keyExtractor={(item, index) => index.toString()}></FlatList>
      <ActionButton
        buttonColor="#F57C00"
        onPress={() => {
          navigation.navigate('Create');
        }}
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
