import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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

  /*
   * const [state変数, 更新する関数] = userState('初期値')
   */
  const [liveData, changeLiveData] = useState({
    title: '',
    artist: '',
    place: '',
    comment: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <TextForm
        placeholder="ライブタイトル"
        icon="music-note"
        value={liveData.title}
        setFieldValue={data => changeLiveData({...liveData, title: data})}
      />

      <TextForm
        placeholder="アーティスト"
        icon="person"
        value={liveData.artist}
        setFieldValue={data => changeLiveData({...liveData, artist: data})}
      />

      <TextForm
        placeholder="場所"
        icon="place"
        value={liveData.place}
        setFieldValue={data => changeLiveData({...liveData, place: data})}
      />

      <TextForm
        placeholder="コメント"
        icon="comment"
        value={liveData.comment}
        setFieldValue={data => changeLiveData({...liveData, comment: data})}
      />

      <Text>{JSON.stringify(liveData, null, 2)}</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text>ばりゅー更新</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(addLive({live: testData}));
        }}>
        <Text>てすとでーた追加</Text>
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
