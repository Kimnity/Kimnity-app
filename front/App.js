import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignUp from './src/containers/SignUp';
import SignIn from './src/containers/SignIn';
import { createRootNavigator } from './src/router';

const Layout = createRootNavigator

export default class App extends React.Component {
  render() {
    return <Layout />
  }
}