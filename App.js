import React from 'react';
/*
 * redux-persist: reduxのstateをローカルのストレージに保存できる
 */
import { PersistGate } from 'redux-persist/integration/react';
/*
 * Provider: コンポーネントにstore情報を渡すもの
 */
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import store, { persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
