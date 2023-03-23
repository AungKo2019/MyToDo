import { StyleSheet,Text, View } from "react-native";

export default function Header(){
    return (
        <View style={styles.Header}>
            <Text style={styles.Title2}>My To Do List</Text>
        </View>
    )
}
    const styles=StyleSheet.create({
        Header:{
             height:80,
             paddingTop:40,
             backgroundColor:'#31E1F7'
        },
        Title2:{
             textShadowOffset:{width:3,height:3},
             textShadowColor:'#555555',
             textShadowRadius:6,
             fontSize:24,
             color:'#FEFBF6',
             textAlign:'center',
        },
    })
        
