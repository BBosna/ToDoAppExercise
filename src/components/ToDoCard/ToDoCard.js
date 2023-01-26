import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({onPress, item, deleteToDoCard}) => {
  return (
    <TouchableOpacity
      style={item.isDone ? styles.container_passive : styles.container_active}
      onPress={() => onPress(item.id)}
      onLongPress={() => deleteToDoCard(item.id)}>
      <Text
        style={
          item.isDone
            ? styles.container_text_passive
            : styles.container_text_active
        }>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ToDoCard;
