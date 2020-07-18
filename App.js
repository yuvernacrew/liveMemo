import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
/*
 * redux-persist: reduxのstateをローカルのストレージに保存できる
 */
import {PersistGate} from 'redux-persist/integration/react';
/*
 * Provider: コンポーネントにstore情報を渡すもの
 */
import {Provider} from 'react-redux';
import store, {persistor} from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
