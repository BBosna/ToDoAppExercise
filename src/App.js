import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Alert,
} from 'react-native';
import ToDoCard from './components/ToDoCard';
import Input from './components/Input';

function App() {
  const createTwoButtonAlert = () =>
    Alert.alert('HATA', 'Boş Görev Ekleyemezsiniz', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  const [todoList, setToDoList] = useState([]);
  const [value, setValue] = useState('');
  const addToDo = () => {
    if (value !== '') {
      setToDoList([
        ...todoList,
        {
          id: Date.now() + Math.random(),
          name: value,
          isDone: false,
        },
      ]);
      setValue('');
    } else {
      createTwoButtonAlert();
    }
  };
  const renderToDoCard = ({item}) => (
    <ToDoCard onPress={ToDoOkey} item={item} deleteToDoCard={deleteToDoCard} />
  );
  const ToDoOkey = id => {
    const NewToDoList = todoList.map(todo => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setToDoList(NewToDoList);
  };

  const deleteToDoCard = id => {
    const NewToDoList = todoList.filter(todo => todo.id !== id);
    setToDoList(NewToDoList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head_container}>
        <Text style={styles.head_text}>Yapılacaklar</Text>
        <Text style={styles.head_text}>
          {todoList.filter(todo => todo.isDone !== true).length}
        </Text>
      </View>
      <View style={styles.body_container}>
        <FlatList renderItem={renderToDoCard} data={todoList} />
      </View>
      <Input setValue={setValue} addToDo={addToDo} value={value} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  head_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  head_text: {
    color: '#f9a201',
    fontSize: 30,
    fontWeight: 'bold',
  },
  body_container: {
    flex: 1,
    marginBottom: 40,
    marginTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  flatlist: {
    flex: 1,
    width: '100%',
  },
});
export default App;
