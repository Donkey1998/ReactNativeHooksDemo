import React, {useState, createContext, useContext} from 'react';
import {  StyleSheet, Text, View } from 'react-native';

const CountContext = createContext() //===关键代码
function HooksUseContext (){
    const [count , setCount] = useState(0);// 0作为count的初始值 点击时调用setCount(count+1)刷新界面
    
    return(
        <View>
          <Text style={styles.text}>You clicked {count} times</Text>
          <Text style={styles.text} onPress={()=>{setCount(count+1)}}>click me!</Text>
          {/*===关键代码 */}
          <CountContext.Provider value={count}>
          <Counter />
          </CountContext.Provider>
        </View>
    );
}

function Counter(){
  const count = useContext(CountContext)  //一句话就可以得到count
  return (<Text>{count}</Text>)
}


export default HooksUseContext;


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