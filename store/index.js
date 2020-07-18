/*
 * combineReducers: storeのツリー構造の作成(初期化)
 * createStore:
 */
import {combineReducers, createStore} from 'redux';
import liveReducer from './reducers/live';

/*
 * persistReducer: 永続化Reducer
 * persistStore: 永続化State
 *  AsyncStorage: 永続化Stateを保管する場所
 */
import {persistReducer, persistStore} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage /* どこに保存するか */,
  whitelist: ['live'] /* 何を保存するか */,
};

/* 全reducerをまとめてrootReducerをツリー構造化 */
const rootReducer = combineReducers({
  live: liveReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default store;
