import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './components/todoItems.js';
import Header from './components/header.js';
import InputTodo from './components/inputTodo.js'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Hello Item', key: '1'},
    { text: 'Item 2', key: '2' }
  ])

  const removeItem = (key) => {
    setTodos((oldTodo) => {
      return oldTodo.filter(todo => todo.key != key)
    })
  }


  const addTodo = (text) => {
    setTodos((oldTodo) => {
      return [
        {text: text, key: oldTodo.length+1},
        ...oldTodo
      ]
    })
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header/>
        <InputTodo addTodo={addTodo}/>
        <FlatList
          style={styles.list}
          data={todos}
          renderItem={({item}) => (
            <TodoItem item={item} removeItem={removeItem}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDFD3',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    paddingTop:20,
  },
  list: {
    marginTop: 40,
    padding: 20,
  }
});

