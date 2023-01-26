import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Input.styles';

const Input = ({setValue, addToDo, value}) => {
  const [button, setButton] = useState(false);
  const todo = text => {
    setValue(text);
    if (text) {
      setButton(true);
    } else {
      setButton(false);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Görevi Giriniz"
        placeholderTextColor="gray"
        onChangeText={todo}
        value={value}
      />
      <TouchableOpacity style={styles.button_container} onPress={addToDo}>
        <Text style={button ? styles.button_active : styles.button_passive}>
          Kaydet
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
