import React, { useState } from "react";
import { StyleSheet,TouchableHighlight, Text, Switch, View} from 'react-native';


export default function Recourds({ el, delite }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return ( 
    <View style={styles.container } >
    <TouchableHighlight onPress={() => delite(el.key)}>
        <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
    <Switch
        trackColor={{ false: "#ff4040", true: "#2ee324" }}
        thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
        ios_backgroundColor="#ff4040"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}


const styles =  StyleSheet.create({
    container: {
 
        backgroundColor: '#94bdff', 
        marginTop: 15, 
        width: '80%', 
        marginLeft: '10%', 
        flexDirection: "row",
        display:"flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingRight: 20
    },
    text: {
        textAlign: 'center',
        color: 'white', 
        padding: 20, 
        width: 200
    }
});
