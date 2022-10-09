import React from 'react'
import {StyleSheet,View,Text} from "react-native";
import DisplayImage from './DisplayImage';
function Header(props) {
  return (
    <View style={styles.header}>
       <DisplayImage></DisplayImage>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:100,
        paddingTop:8,
        backgroundColor:"#181D3D",
        alignItems: "center",
        justifyContent: "center",
        display: 'flex' ,
        flexDirection: "row",
        
      },
    headerTitle:{
        color:"white",
        fontSize:30,
        fontFamily: 'Mitr_600SemiBold',
        letterSpacing:2,
        margin:10
        }
    }
)

export default Header