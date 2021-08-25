// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
import * as React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

//HomeとDetailをStackNavigatorとして構成する
const HomeStack = createStackNavigator(
  {
      Home: { screen: Home },
      Detail: { screen: Detail }
  }
);

//AppContainerを作る（V3から）
const HomeContainer = createAppContainer(HomeStack);

export default class App extends React.Component {
  render() {
      return (
          <HomeContainer />
      );
  }
}

