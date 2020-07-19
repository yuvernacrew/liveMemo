import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const SetListForm = ({
  value,
  index,
  setFieldValueTitle,
  setFieldValueComment,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.number}>{index + 1}.</Text>
        <View>
          <TextInput
            style={styles.title}
            multiline={true}
            style={styles.input}
            placeholder="曲名"
            onChangeText={setFieldValueTitle}
            value={value.title}
          />
        </View>
      </View>
      <View>
        <TextInput
          style={styles.comment}
          multiline={true}
          style={styles.input}
          placeholder="コメント"
          onChangeText={setFieldValueComment}
          value={value.comment}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'column',
    borderColor: '#607D8B',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 16,
  },
  number: {
    marginRight: 8,
    paddingTop: 6,
  },
});

export default SetListForm;
