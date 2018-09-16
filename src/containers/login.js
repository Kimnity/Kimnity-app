import React, {Component} from 'react';
import {Animated, Platform, StyleSheet, Text, TextInput, View, BVLinearGradient, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Colors from '../const/colors'



export default class App extends Component<Props> {


  constructor() {
    super();
    this.state = {
      mailWidth: new Animated.Value(0),
      passWidth: new Animated.Value(0)
    }
  }

  onFocus(type) {
    let width = type === 'mail' ? this.state.mailWidth : this.state.passWidth
    width.setValue(0);
    Animated.timing(
      width,
      {toValue: 1, duration: 200}
    ).start()
  }

  onBlur(type) {
    let width = type === 'mail' ? this.state.mailWidth : this.state.passWidth
    Animated.timing(
      width,
      {toValue: 0, duration: 200}
    ).start()
  }

  render() {


    let mailWidth = this.state.mailWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%']
    });

    let passWidth = this.state.passWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%']
    });

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>ロゴ</Text>
        <Text style={styles.message}>Welcome to Kimnity!</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>メールアドレス</Text>
          <TextInput
            style={styles.input}
            placeholder="kimoka@kimnity.com"
            onFocus={() => this.onFocus('mail')}
            onBlur={() => this.onBlur('mail')}
            onChangeText={(text) =>  this.props.setId(text)}
            value={this.props.state.id}
          />
          <Animated.View
            style={{width: mailWidth}}>
            <LinearGradient 
              style={{height: 2}}
              colors={Colors.theme} 
              start={{x: 1, y: 1}}
              end={{x: 0.0, y: 1}}>
            </LinearGradient>
          </Animated.View>
        </View>

        <View style={[styles.inputContainer, styles.passContainer]}>
          <Text style={styles.label}>パスワード</Text>
          <TextInput
            style={styles.input}
            placeholder="●●●●●●"
            secureTextEntry={true}
            onFocus={() => this.onFocus('pass')}
            onBlur={() => this.onBlur('pass')}
            onChangeText={(text) =>  this.props.setPass(text)}
            value={this.props.state.pass}
          />
          <Animated.View
            style={{width: passWidth}}>
            <LinearGradient 
              style={{height: 2}}
              colors={Colors.theme} 
              start={{x: 1, y: 1}}
              end={{x: 0.0, y: 1}}>
            </LinearGradient>
          </Animated.View>
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
    fontSize: 16,
    marginBottom: -2,
    paddingBottom: 6
  },
  
  inputContainer: {
    marginBottom: 24,
  },

  inputGradient: {
    height: 2,
  },

  label: {
    fontSize: 12,
    marginBottom: 9
  },

  logo: {
    marginBottom: 70
  },

  message: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 88
  },

  passContainer: {
    marginBottom: 50
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
