import React from 'react';
import { StyleSheet, TextInput, Text, Button, View} from 'react-native';

import { useState } from 'react';


export default function Form({addItem}) {
    const [text, setValue] = useState('');/*3) созхренение текста пользовтеля в отдельную константу */

    const onChange = (text) => {
        setValue(text);/* 2) в функцию setValue мы передаем то что записал пользователь после чего записывается в контанту текст*/
    };

  return ( 
    <View>
        <TextInput maxLength={20} style={styles.input} onChangeText={onChange}/* 1) onChangeText обработчик событий(вызывается каждый раз когда мы что-то воодим в текстовое поле*/ placeholder='Добавте запись...'/>
        <Button title='Добавить' onPress={() => addItem(text)} /* в данную вункцию при нажатии будет передаваться текс, который ввел пользователь *//>
    </View>
  );
}


const styles =  StyleSheet.create({
    input: {
        borderBottomWidth: 1, 
        borderColor: 'black',
        padding: 10, 
        marginHorizontal: 40, 
        marginVertical: 20
    }
});