import React from 'react'
import { Image, StyleSheet } from "react-native";

function DisplayImage() {
  return (
    <Image style={styles.image} source={require("../assets/notes.png")}/>
  )
}

const styles = StyleSheet.create({
    image:{
        width:40,
        height:40,
    }
})

export default DisplayImage