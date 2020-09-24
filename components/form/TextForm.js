import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
  input: {
    width: '100%',
  },
  icon: {
    marginRight: 12,
  },
});

const TextForm = ({ icon, value, placeholder, setFieldValue }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialIcons style={styles.icon} name={icon} size={20} color="gray" />
      )}
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={setFieldValue}
        value={value}
      />
    </View>
  );
};

export default TextForm;
