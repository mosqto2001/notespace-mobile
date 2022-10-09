import React,{useState} from 'react'
import {View,Text,TextInput,Button,StyleSheet,Modal,Alert,Image,TouchableOpacity} from 'react-native'
import Header from './Header';

function TodoInput(props) {
const [enteredTask, setEnteredTask] = useState("");


function TodoInputHandler(enteredText){
    setEnteredTask(enteredText);

}

function addTaskHandler(){
    props.onAddTask(enteredTask);
    setEnteredTask("");
}

function checkInput(enteredTask){
    if(enteredTask.length > 0) addTaskHandler()
    else {
        Alert.alert("Error","Please enter a task",[{text:"OK"}],{
            cancelable: false
        })
    }
}

  return (
    // <Header title="Cute Note"/>
    <Modal visible={props.visible} animationType="slide">
        <Header title="Add Note"/>
    <View style={styles.inputContainer}>
        <TextInput placeholder='Task' style={styles.input} onChangeText={TodoInputHandler} value={enteredTask}></TextInput>
    
    <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonDel} onPress={props.onCancel}><Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => checkInput(enteredTask)}><Text style={styles.buttonText}>Create</Text></TouchableOpacity>
    </View>
    </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    input: {
      width: "80%",
      borderColor: "black",
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "60%"
    },
    buttonContainer: {
        flexDirection:"row",
        justifyContent: 'flex-end',
        
      }
      ,buttonText:{
        fontFamily: 'Mitr_400Regular',
        color:'white',
      },
      buttonAdd:{
        borderRadius:10,
        backgroundColor: '#5075F7',
        width:100,alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        margin:15
      },
      buttonDel:{
        borderRadius:10,
        backgroundColor: '#F15A63',
        width:100,alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        margin:15,
        marginLeft:1
      }
  });
   

export default TodoInput