import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
