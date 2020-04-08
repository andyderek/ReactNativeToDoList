import React,  { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function InputTodo({addTodo, clearText}) {
    const [text, setText] = useState('')

    const inputChange = (textChange) => {
        setText(textChange)
    }


  return (
    <TextInput 
        style={style.inputField}
        placeHolder={'Add to your list'}
        onSubmitEditing={ () => {addTodo(text); setText('')} }
        onChangeText={inputChange}
        defaultValue={ text }
        clearTextOnFocus={true}
        clearButtonMode={"always"}/>
  );
}

const style = StyleSheet.create({
    inputField: {
        padding: 10,
        height: 40,
        margin: 20,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'rgba(0, 0, 0, .1)',
        color: 'white',
    }
})