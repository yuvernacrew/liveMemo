import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, Text} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>くりえいと</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
