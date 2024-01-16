import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  

  return (
    <View style={styles.container}>
      <View style={styles.centar}>
        <TextInput style={styles.campo} placeholder="Input your Goal!!"/>
        <Button title="Add goal"/>
      </View>
      <View style={[styles.lista, styles.hr]}>
        <Text style={styles.tamanio1} >- Your list of goals.....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    padding:20,
    backgroundColor: '#FBFFC1',
   
  },
  centar:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: '#FFF',
    

  },
  campo:{
    borderBottomWidth:1,
    borderBottomColor:'#898A89',
    padding:5,
  },
  lista:{
    paddingTop:20,
    
  },
  tamanio1:{
    fontSize:20,
  },
  hr: {
    borderTopColor: '#898A89',
    borderTopWidth: 1,
    marginVertical: 10,
  },
  
});
