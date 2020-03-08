import React, { useState , useEffect } from 'react';
import {  StyleSheet, Text, View } from 'react-native';

const HookUseEffect = props =>{
    const [ count , setCount ] = useState(0);
    /** 1111111111111
    * useEffect两个注意点
    *React首次渲染和之后的每次渲染都会调用一遍useEffect函数，而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和更新导致的重新渲染(componentDidUpdate)。
    *
    *useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而componentDidMonut和componentDidUpdate中的代码都是同步执行的
    */

    // useEffect(()=>{
    //     console.log(`useEffect=>You clicked ${count} times`)
    // })


    /**222222222222
    *这就需要请出useEffect的第二个参数，它是一个数组，数组中可以写入很多状态对应的变量，意思是当状态值发生变化时，我们才进行解绑。
    但是当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数。
    */
    // useEffect(()=>{
    //     console.log(`useEffect=>You clicked ${count} times`)
    //     return ()=>{
    //         console.log('====================')
    //     }
    // },[])


    /*33333333333
    但是如果我们想每次count发生变化，我们都进行解绑，只需要在第二个参数的数组里加入count变量就可以了
    这时候只要count状态发生变化，都会执行解绑副作用函数
    */
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log('====================')
        }
    },[count])

    return (
        <View>
            <Text>You clicked {count} times</Text>
            <Text onPress={()=>{setCount(count+1);}}>click me</Text>
            <Text onPress={()=>{props.navigation.goBack()}}>goBack</Text>
        </View>
    )
}
 
export default HookUseEffect;
