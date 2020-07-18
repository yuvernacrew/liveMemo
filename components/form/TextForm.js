import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const TextForm = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#607D8B',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    marginRight: 8,
  },
  input: {
    width: '100%',
  },
});

export default TextForm;
