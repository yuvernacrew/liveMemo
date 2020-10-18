import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import SetList from '../components/SetList';
import LiveDetail from '../components/LiveDetail';

import { deleteLive } from '../store/actions/live';

export default ({ route, navigation }) => {
  const { data } = route.params;
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: いつかcomponent化、移行 */}
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteLive({ live: data }));
          navigation.navigate('Index');
        }}
        style={styles.deleteBtn}
      >
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
      <LiveDetail
        title={data.title}
        artist={data.artist}
        place={data.place}
        date={Moment(data.date).format('YYYY/MM/DD')}
        comment={data.comment}
      />
      <FlatList
        data={data.setList}
        renderItem={({ item, index }) => (
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
    position: 'relative',
  },
  deleteBtn: {
    position: 'absolute',
    width: 24,
    height: 24,
    right: 10,
    top: 10,
    zIndex: 1000,
  },
});
