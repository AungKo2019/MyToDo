import { StyleSheet, Text, TouchableOpacity,Image,View } from "react-native";
import logo from '../assets/favicon.png';

export default function TodoItem({item,pressableHander}){
    return(
        <TouchableOpacity style={styles.list} onPress={()=>pressableHander(item.key)}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={logo} style={{width:20,height:20}}></Image>
                <Text key={item.key} style={styles.text}>{item.key}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create(
    {
        list:{
             marginTop:10,
             padding:10,
             backgroundColor:'#CDF0EA',
             borderColor:'#bbb',
             borderWidth:1,
             borderStyle:'dashed',
             borderRadius:15,   
        },
        text:{
            color:'#73777B',
            paddingLeft:5
        }
    }
)