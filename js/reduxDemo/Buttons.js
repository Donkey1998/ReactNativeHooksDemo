import React ,{useContext}from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import {ColorContext,UPDATE_COLOR} from './Color'

function Buttons(){
    const { dispatch } = useContext(ColorContext)
    return (
        <View>
            <Text onPress={()=>{dispatch({type:UPDATE_COLOR,color:"red"})}}>红色</Text>
            <Text onPress={()=>{dispatch({type:UPDATE_COLOR,color:"yellow"})}}>黄色</Text>
        </View>
    )
}

export default Buttons