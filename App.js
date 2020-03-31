import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [todoItem, setTodoItem] = useState('');
  return (
    <View style={styles.container}>
      <TextInput 
        style={{height: 40}}
        placeholder={"I am holding your place"}
        onChangeText={todoItem => setTodoItem(todoItem)}
        defaultValue={ todoItem }
      />
      <Text>
        {todoItem}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

