import React from 'react';
import { StyleSheet, View, SafeAreaView, Text} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function Header() {
  return ( 
    <View style={styles.main}>
        <Text style={styles.text} >Список Записей</Text>
    </View>
  );
}


const styles =  StyleSheet.create({
    main: {
        paddingTop: 60, 
        height: 100, 
        backgroundColor: 'silver'
    }, 
    text: {
        fontSize: 18,
        color: 'white', 
        textAlign: 'center', 
    }
});