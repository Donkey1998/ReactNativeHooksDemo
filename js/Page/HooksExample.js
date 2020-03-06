import React, {useState} from 'react';
import {  StyleSheet, Text, View } from 'react-native';
function HooksExample (){
    const [count , setCount] = useState(0);// 0作为count的初始值 点击时调用setCount(count+1)刷新界面
    const [ age , setAge ] = useState(18);
    const [ sex , setSex ] = useState('男')
    /*
    let _useState = userState(0)
    let count = _useState[0]
    let setCount = _useState[1]

    useState这个函数接收的参数是状态的初始值(Initial state)，它返回一个数组.
    这个数组的第0位是当前的状态值，
    这个数组第1位是可以改变状态值的方法函数。 
    所以上面的代码的意思就是声明了一个状态变量为count，并把它的初始值设为0，同时提供了一个可以改变count的状态值的方法函数


    useState不能在if...else...这样的条件语句中进行调用，必须要按照相同的顺序进行渲染。
    如果你还是不理解，你可以记住这样一句话就可以了：就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
     */

    return(
        <View>
          <Text style={styles.text}>You clicked {count} times</Text>
          <Text style={styles.text} onPress={()=>{setCount(count+1)}}>click me!</Text>
          <Text style={styles.text}>JSPang 今年:{age}岁</Text>
          <Text style={styles.text}>性别:{sex}</Text>
        </View>
    );
}

export default HooksExample;


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