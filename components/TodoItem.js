import React, { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity,CheckBox} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

function TodoItem(props) {
// const [check,setCheck] = useState(false)

  return (
    <View style={styles.screen}>
        <View style={styles.listItem}>
        <Text>{props.title}</Text>
        
        </View>

        <TouchableOpacity
        onPress={props.onEdit.bind(this,{id:props.id,value:props.title})}
        style={[styles.button,{backgroundColor: '#FF8C1F'}]}
        >
          <Icon style={styles.icon} name="edit" size={24} color="#900" />
      </TouchableOpacity>    
        <TouchableOpacity
        onPress={props.onDelete.bind(this,props.id)}
        style={[styles.button,{backgroundColor: '#F15A63'}]}
        >
          <Icon style={styles.icon} name="delete" size={24} color="#900" />
      </TouchableOpacity>    
    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      width: 200
    },
    screen: {
      flexDirection: "row",
      marginTop: 20,
      display:"flex",
      backgroundColor: "white",

      justifyContent: 'center',
      alignItems: "center",
      width: "100%",
      padding: 15,
      borderRadius:10,
      shadowOffset: {width: 0, height: 6},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 6,  
    },
    button: {
      borderRadius:10,
        width:40,alignItems: 'center',
        height:40,
        justifyContent: 'center',
        padding:6,
        marginLeft: 10,
        color: '#FFFFFF',
    },
    text: {
      fontSize: 14,
      color: "white"
    },
    icon: {
      color:'white'
    }
  });

export default TodoItem;
