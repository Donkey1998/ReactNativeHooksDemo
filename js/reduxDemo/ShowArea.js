import React ,{useContext} from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { ColorContext } from './Color';

function ShowArea(){
    const {color} = useContext(ColorContext)
        return (
            <View>
                <Text style={{color:color}}>字体颜色为{color}</Text>
            </View>
        )
}
export default ShowArea