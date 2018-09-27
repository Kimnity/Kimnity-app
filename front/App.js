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

import SignUpScreen from './src/containers/SignUp';
import {registerScreens} from './src/containers'

 registerScreens();

 Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      signUp: {
        id: null,
        pass: null
      }
    }
  }

  setId(text) {
    this.setState({signUp: {
      id: text,
      pass: this.state.signUp.pass
    }})
  }

  setPass(text) {
    this.setState({signUp: {
      pass: text,
      id: this.state.signUp.id
    }})
  }

  render() {
    return(
      <View style={{height: '100%', flex: 1}}>
        <SignUpScreen
          state={this.state.signUp}
          setId={this.setId.bind(this)}
          setPass={this.setPass.bind(this)}
        />
      </View>
    )
  }
}

