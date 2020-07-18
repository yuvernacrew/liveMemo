import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import LiveList from './components/liveList';
// TODO: 仮のデータをimport
import data from './assets/data';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <LiveList title={item.title} artist={item.artist} date={item.date} />
        )}
        keyExtractor={(item, index) => index.toString()}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
