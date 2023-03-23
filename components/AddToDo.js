import React from "react";
import { useState } from "react";
import { StyleSheet,Text, View, TextInput,TouchableOpacity } from "react-native";

export default function AddToDo({submitHandlar}){
    const [text,setText]=useState('');

    function changeHandlear(val){
        setText(val);
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='New Todo...' onChangeText={changeHandlear}/>
            <TouchableOpacity style={styles.button} onPress={()=>{submitHandlar(text);}}>
                <Text style={styles.text}> Add Todo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        input: {
            marginBottom:8,
            paddingHorizontal:8,
            paddingVertical:6,
            borderBottomWidth:1,
            borderColor:'#7a42f4',
            borderWidth:1
        },
        container:{
           marginBottom:5,
        },
        button:{
            backgroundColor:'#EEF1FF',
            borderRadius:10,
            padding:8,
            elevation:4,
        },
        text:{
            textAlign:'center',
            textShadowOffset:{width:2,height:2},
            textShadowRadius:2,
            fontSize:14,
            color:'#73777B',
        }
    }
)