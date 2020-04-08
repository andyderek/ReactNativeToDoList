import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function TodoItem({item, removeItem}) {

  return (
    <TouchableOpacity>
      <Text 
      style={style.itemStyle}
      onPress={() => removeItem(item.key)}>
        {item.text} 
      </Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  itemStyle: {
    color: '#D291BC',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  }
})