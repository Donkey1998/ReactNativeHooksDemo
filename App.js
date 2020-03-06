
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Screens from './Screens';

const AppNavigator =  createStackNavigator(
  Screens,
  {
    initialRouteName: 'HooksDemo',
    headerMode: 'none',
    mode: 'card',
    navigationOptions: {
      gesturesEnabled: true,
      gestureResponseDistance: 50,
    },
  }
);

const RootNavigate = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return (
      <RootNavigate />
    );
  }
}


