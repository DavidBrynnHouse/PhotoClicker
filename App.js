import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator}  from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen'
import CameraScreen from './screens/CameraScreen'

const MainNavigator = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    CameraScreen: { screen: CameraScreen}
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#b83227'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;