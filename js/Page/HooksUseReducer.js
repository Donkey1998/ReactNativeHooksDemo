import React, {useReducer} from 'react';
import {  StyleSheet, Text, View } from 'react-native';
function HooksUseReducer (){
    // const [count , setCount] = useState(0);// 0作为count的初始值 点击时调用setCount(count+1)刷新界面
    const [ count , dispatch ] =useReducer((state,action)=>{
      switch(action){
          case 'add':
              return state+1
          case 'sub':
              return state-1
          default:
              return state
      }
  },10) // count 的默认值为10
    return(
        <View>
          <Text style={styles.text}>现在的点击次数是{count}</Text>
          <Text style={styles.text} onPress={()=>{dispatch('add')}}>加</Text>
          <Text style={styles.text} onPress={()=>{dispatch('sub')}}>减</Text>
        </View>
    );
}

export default HooksUseReducer;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });