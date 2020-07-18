import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import TextForm from '../components/form/TextForm';

export default function CreateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TextForm label="ライブタイトル" />
      <TextForm label="アーティスト" />
      <TextForm label="場所" />
      <TextForm label="日程" />
      <TextForm label="コメント" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
