import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import {MaterialIcons} from '@expo/vector-icons';
// component
import TextForm from '../components/form/TextForm';
import DateForm from '../components/form/DateForm';
import SetListForm from '../components/form/SetListForm';

/*
 * useDispatch: dispatchを使えるようにする(hooks)
 * useSelector: redux上のstateを取得(hooks)
 */
import {useDispatch, useSelector} from 'react-redux';
import {addLive, deleteAllLives} from '../store/actions/live';

export default ({navigation}) => {
  /*
   * dispatchの初期化
   */
  const dispatch = useDispatch();
  const lives = useSelector(state => state.live);

  /*
   * const [state変数, 更新する関数] = userState('初期値')
   */
  const [liveData, changeLiveData] = useState({
    title: '',
    artist: '',
    place: '',
    comment: '',
    date: new Date(),
    setList: [
      {
        title: '',
        comment: '',
      },
    ],
  });

  /* セットリストを追加する際のフォーマット整形 */
  const formattedSetList = (liveData, type, index, value) => {
    let setListNewArray = liveData.setList;
    setListNewArray[index][type] = value;
    return {
      ...liveData,
      setList: setListNewArray,
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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

        <DateForm
          value={liveData.date}
          setFieldValue={data => changeLiveData({...liveData, date: data})}
        />

        <TextForm
          placeholder="コメント"
          icon="comment"
          value={liveData.comment}
          setFieldValue={data => changeLiveData({...liveData, comment: data})}
        />

        <FlatList
          data={liveData.setList}
          renderItem={({item, index}) => (
            <SetListForm
              value={item}
              index={index}
              setFieldValueTitle={data =>
                changeLiveData(formattedSetList(liveData, 'title', index, data))
              }
              setFieldValueComment={data =>
                changeLiveData(
                  formattedSetList(liveData, 'comment', index, data),
                )
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.addSetListBtnContainer}>
          <TouchableOpacity
            style={styles.addSetListBtn}
            onPress={() => {
              changeLiveData({
                ...liveData,
                setList: [
                  ...liveData.setList,
                  {
                    title: '',
                    comment: '',
                  },
                ],
              });
            }}>
            <MaterialIcons
              style={styles.addSetListBtnIcon}
              name="playlist-add"
              size={20}
              color="gray"
            />
            <Text style={styles.addSetListBtnTitle}>セットリスト追加</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ActionButton
        buttonColor="#F57C00"
        onPress={() => {
          dispatch(addLive({live: liveData}));
          navigation.navigate('Index');
        }}
        renderIcon={() => <MaterialIcons name="send" size={20} color="white" />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  addSetListBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 20,
  },
  addSetListBtn: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 4,
  },
  addSetListBtnIcon: {
    marginRight: 4,
  },
});
