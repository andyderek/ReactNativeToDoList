import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header({item}) {

  return (
    <View style={styles.header}>
        <Text style={styles.text}>My To Do List:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "#D291BC",
        justifyContent:'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})