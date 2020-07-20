import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';

const DateForm = ({setFieldValue, value}) => {
  /*
   * datapicker用 モーダル
   */
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setFieldValue(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.icon}
        name="date-range"
        size={20}
        color="gray"
      />
      <TouchableOpacity onPress={showDatePicker} style={styles.text}>
        <Text>{Moment(value).format('YYYY/MM/DD')}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
  text: {
    fontSize: 8,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  input: {
    width: '100%',
  },
  icon: {
    marginRight: 12,
  },
});

export default DateForm;
