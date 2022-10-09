import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,FlatList,Image,TouchableOpacity } from 'react-native';
import { useFonts, Mitr_200ExtraLight,Mitr_400Regular,Mitr_600SemiBold } from '@expo-google-fonts/mitr';
import { AppLoading } from "expo-app-loading";
import Header from './components/Header';
import DisplayImage from './components/DisplayImage';
import TodoItem from './components/TodoItem';
import TodoInput from "./components/TodoInput";
import TodoEdit from "./components/TodoEdit";

export default function App() {
  let [fontsLoaded] = useFonts({
    Mitr_200ExtraLight,Mitr_400Regular,Mitr_600SemiBold
  });
  const [count, setCount] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [showingTab, setShowingTab] = useState("list");
  const [selectedTask, setSelectedTask] = useState({});

  function addTaskHandler(taskTitle){
    setTasks(currentTasks => [...currentTasks, {id:count ,value:taskTitle}]);
    setCount(count+1);
    setShowingTab("list")
  }

  function deleteTaskHandler(taskId){
    setTasks(currentTasks => currentTasks.filter(task => task.id !== taskId))
  }

  function deleteAllTaskHandler(){
    setTasks([])
  }

  function editTaskHandler(task){
    setShowingTab("list")

    const newTasks = tasks.map(obj => {
      if (obj.id === task.id) {
        return {...obj,value:task.value};
      }
    
      return obj;
    });
    setTasks(newTasks)
  }

  function editingTaskHandler(task){
    setSelectedTask(task)
    showTab("edit")
  }


  function showTab(tab){
    setShowingTab(tab)
  }


  if (!fontsLoaded) {
    return null;
  } else {
  return (
    <View style={styles.body} >
      
      <Header title="Note Space"></Header>
      <View style={styles.buttonContainer} >
      <TouchableOpacity onPress={() => showTab("add")} style={styles.buttonAdd}><Text style={styles.buttonText}>Add Note</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => deleteAllTaskHandler()} style={styles.buttonDel}><Text style={styles.buttonText}>Delete All</Text></TouchableOpacity>
      </View>
      <TodoInput visible={showingTab === "add"} onAddTask={addTaskHandler} onCancel={() =>showTab("list")}/>
      <TodoEdit visible={showingTab === "edit"} editingTask={selectedTask} onEditTask={editTaskHandler} onCancel={() =>showTab("list")}/>
    {tasks.length > 0 ?<View style={styles.notesContainer} >
    <FlatList keyExtractor={(item,index) => item.id} data={tasks} renderItem={itemData => (
       <TodoItem id={itemData.item.id} title={itemData.item.value} onDelete={deleteTaskHandler} onEdit={editingTaskHandler}/>
    )}></FlatList></View> : <Text style={styles.emptyNoteText}>You don't have any note</Text> }
    

    </View>
  );
}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },body:{
    display: 'flex' , backgroundColor:'#F6F6F6',height:"100%",
    color:'red',
    fontFamily: 'Mitr_600SemiBold',
    flexDirection: "column",alignItems: 'center',
  },
  buttonContainer: {
    flexDirection:"row",
    justifyContent: 'flex-end',
    width:"100%"
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
  },emptyNoteText:{
    fontFamily: 'Mitr_400Regular',
    color:'#181D3D',      fontSize:16,margin:100,    
  },notesContainer:{   display: 'flex',
    width:"100%",
    height:"100%",alignItems: 'center',
    justifyContent: 'center',
  }
});
