import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text} from 'react-native';
import Header from './elements /Header';
import Recourds from './elements /Records';
import Form from './elements /Form';


export default function App() {
  
  const [ListOfItems, setListOfitems] = useState([
    {text: 'Вот так надо', key: '1'},
  ])

  const addItem = (text) => {
    setListOfitems((list) => {
    return [
      {text: text, /* свойство текст с значением текст, которорый передается из текста написанного пользователем */ key: Math.random().toString(36).substring(7)}, 
      ...list
    ]
  });
}

const delite = (key) => {
  setListOfitems((list) => {
    return list.filter(ListOfItems => ListOfItems.key != key);
  });
}

  return ( 
    <View>
      <Header />
      <Form addItem={addItem}></Form>
        <View>
          <FlatList data={ListOfItems} renderItem={({ item }) => (
            <Recourds el={item} delite={delite}/>
        )} />
        </View>
    </View>
  );
}


const style =  StyleSheet.create({

});