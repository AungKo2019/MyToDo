import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [person, setHome]=useState([
    {name:'1 to do',key:'1'},
    {name:'2 to do',key:'2'},
    {name:'3 to do',key:'3'},
    {name:'4 to do',key:'4'},
    {name:'5 to do',key:'5'},
    {name:'6 to do',key:'6'},
    {name:'7 to do',key:'7'},
    {name:'8 to do',key:'8'},
    {name:'9 to do',key:'9'},
    {name:'10 to do',key:'10'},
  ])

  function pressableHander(key) {
    setHome(
      (m123)=>{
        return m123.filter(mkey=> mkey.key !=key);
      }
    )
  }

  function submitHandlar (itext){
    setHome(
      (newToday)=>{
        return [
          {name:itext,key:Math.random().toString()},
          ...newToday
        ]
      }

    )
  }

  return (
    <View style={styles.container}>
     <Header/>
     <View>
        <AddToDo submitHandlar={submitHandlar}></AddToDo>
     </View>
     <View style={styles.content}>
        <FlatList
          data={person}
          renderItem={({item})=>(
            <TodoItem item={item} pressableHander={pressableHander}></TodoItem>
          )}
        />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding:10,
    marginBottom:25,
    backgroundColor:'#F9F9F9',
  },
});
