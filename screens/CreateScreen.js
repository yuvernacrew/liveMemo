import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import TextForm from '../components/form/TextForm';
/*
 * useDispatch: dispatchを使えるようにする(hooks)
 * useSelector: redux上のstateを取得(hooks)
 */
import {useDispatch, useSelector} from 'react-redux';
import {addLive, deleteAllLives} from '../store/actions/live';

export default function CreateScreen() {
  /*
   * dispatchの初期化
   */
  const dispatch = useDispatch();
  const lives = useSelector(state => state.live);
  console.log(lives);

  const testData = {
    title: 'UVERworld てすと',
    artist: 'UVERworld',
    date: new Date('2017/11/27 20:30'),
    place: '家',
    comment: 'だいすき',
    setList: [
      {
        title: 'IMPACT',
        comment: 'ライブハウス鬼あったまる',
      },
      {
        title: 'ナノ・セカンド',
        comment: 'ばくあげ',
      },
      {
        title: '7th Trigger',
        comment: 'ちーずのソウルソング',
      },
      {
        title: '境界',
        comment: '生きる意味なんてあるわけないじゃん、作るしかないじゃん',
      },
      {
        title: 'PRAYING RUN',
        comment: '泣けるけどげきあつ',
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextForm label="ライブタイトル" />
      <TextForm label="アーティスト" />
      <TextForm label="場所" />
      <TextForm label="日程" />
      <TextForm label="コメント" />
      <TouchableOpacity
        onPress={() => {
          dispatch(addLive({live: testData}));
        }}>
        <Text>てすと</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteAllLives({live: testData}));
        }}>
        <Text>全消し</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
