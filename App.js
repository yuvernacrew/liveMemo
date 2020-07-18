import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
