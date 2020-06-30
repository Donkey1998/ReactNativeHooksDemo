/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class HomePage extends Component {
  onPress(){
    this.props.navigation.navigate('reduxDemo', {
      navigation: this.props.navigation,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={()=>{this.onPress()}}>Go to HooksExample!</Text>
      </View>
    );
  }
}

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
    color:'#FFF',
    margin: 10,
    backgroundColor:'#0000CD'
  },
});
