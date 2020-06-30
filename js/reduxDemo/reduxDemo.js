import React, { useReducer } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import { Color } from './Color'; 

function reduxDemo(){
    return (
        <View>
          <Color>
            <ShowArea />
            <Buttons />
          </Color>
        </View>
    )
}

export default reduxDemo