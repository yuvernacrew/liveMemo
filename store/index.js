import {combineReducers, createStore} from 'redux';
import liveReducer from './reducers/live';

const rootReducer = combineReducers({
  live: liveReducer,
});

const store = createStore(rootReducer);

export default store;
