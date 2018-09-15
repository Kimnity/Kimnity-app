/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, BVLinearGradient, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Colors from './const/colors'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  onFocus() {
    console.log(68990)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>ロゴ</Text>
        <Text style={styles.message}>Welcome to Kimnity!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="aaa"
            onFocus={() => this.onFocus()}
          />
          <LinearGradient 
            style={styles.inputGradient}
            colors={Colors.theme} 
            start={{x: 1, y: 1}}
            end={{x: 0.0, y: 1}}>
          </LinearGradient>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="aaa"
          />
          <LinearGradient 
            style={styles.inputGradient}
            colors={Colors.theme} 
            start={{x: 1, y: 1}}
            end={{x: 0.0, y: 1}}>
          </LinearGradient>
        </View>

        <TouchableOpacity style={styles.registerButton}>    
          <LinearGradient 
            style={styles.button}
            colors={Colors.theme} 
            start={{x: 1, y: 1}}
            end={{x: 0.0, y: 1}}>
            <Text style={styles.buttonText}>メールアドレスで登録</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.twitterButton}>    
          <Text style={styles.buttonText}>Twitterで登録</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = {
  button: {
    alignItems: 'center',
    borderRadius: 4,
    height: 46,
    justifyContent: 'center',
  },

  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: Colors.grayLight,
    bottom: 0,
    padding: 40,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  input: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 2,
    fontSize: 14,
    // marginBottom: -2,
    paddingBottom: 8
  },
  
  inputContainer: {
    marginBottom: 44
  },

  inputGradient: {
    height: 2
  },

  label: {
    fontSize: 12,
    marginBottom: 9
  },

  logo: {
    marginBottom: 70
  },

  message: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 88
  },

  registerButton: {
    marginBottom: 20
  },

  twitterButton: {
    alignItems: 'center',
    backgroundColor: '#00aced',
    borderRadius: 4,
    height: 46,
    justifyContent: 'center'
  }
}
