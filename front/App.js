/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Animated, Platform, StyleSheet, Text, TextInput, View, BVLinearGradient, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Navigation} from 'react-native-navigation';

import LoginPage from './src/containers/login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      login: {
        id: null,
        pass: null
      }
    }
  }

  setId(text) {
    this.setState({login: {
      id: text,
      pass: this.state.login.pass
    }})
  }

  setPass(text) {
    this.setState({login: {
      pass: text,
      id: this.state.login.id
    }})
  }

  render() {
    return(
      <View style={{height: '100%', flex: 1}}>
        <LoginPage
          state={this.state.login}
          setId={this.setId.bind(this)}
          setPass={this.setPass.bind(this)}
        />
      </View>
    )
  }
}

