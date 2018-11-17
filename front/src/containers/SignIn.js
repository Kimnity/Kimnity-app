import React, {Component} from 'react';
import {Animated, Button, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, AsyncStorage} from 'react-native';
// import {Navigation} from 'react-native-navigation';

// import { goToAuth, goHome } from '../navigation'
import axios from 'axios';

// import LinearGradient from 'react-native-linear-gradient';

import Colors from '../const/colors'



export default class signIn extends Component<Props> {

  constructor() {
    super();
    this.state = {
      mailWidth: new Animated.Value(0),
      passWidth: new Animated.Value(0),
      signIn: {
        id: null,
        pass: null
      }
    }
  }

  static navigationOptions = {
    title: 'サインイン',
  };

  signIn = async () => {
    await AsyncStorage.setItem('userToken', 'true');
    axios.post('https://api-kimnity.herokuapp.com/api/auth/sign_in',
      {
        email: this.state.signIn.id,
        password: this.state.signIn.pass
      })
      .then(response => {
        this.props.navigation.navigate("App");
      })
      .catch(e => {
        console.log(e)
      });
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

  setId(text) {
    this.setState({signIn: {
      id: text,
      pass: this.state.signIn.pass
    }})
  }

  setPass(text) {
    this.setState({signIn: {
      pass: text,
      id: this.state.signIn.id
    }})
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
        <View style={styles.inputContainer}>
          <Text style={styles.label}>メールアドレス</Text>
          <TextInput
            style={styles.input}
            placeholder="kimoka@kimnity.com"
            onFocus={() => this.onFocus('mail')}
            onBlur={() => this.onBlur('mail')}
            onChangeText={(text) =>  this.setId(text)}
            value={this.state.signIn.id}
            autoCapitalize="none"
          />
          <Animated.View
            style={{width: mailWidth}}>
            <View style={{height: 2, backgroundColor: Colors.theme}}></View>
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
            onChangeText={(text) =>  this.setPass(text)}
            value={this.state.signIn.pass}
            autoCapitalize="none"
          />
          <Animated.View
            style={{width: passWidth}}>
            <View style={{height: 2, backgroundColor: Colors.theme}}></View>
          </Animated.View>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={this.signIn.bind(this)}>
          <Text style={styles.buttonText}>メールアドレスでサインイン</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.twitterButton} onPress={() => {
            // goHome();
            // Navigation.push(this.props.componentId, {
            //   component: {
            //     name: 'Home',
            //   }
            // });
          }}>
          <Text style={styles.buttonText}>Twitterでサインイン</Text>
        </TouchableOpacity>
        <Text style={styles.linkText}>パスワードを忘れた</Text>
      </View>
    );
  }
}

const styles = {

  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: Colors.grayLight,
    bottom: 0,
    padding: 28,
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
    color: Colors.black,
    fontSize: 12,
    marginBottom: 8
  },

  logo: {
    marginBottom: 70
  },

  passContainer: {
    marginBottom: 50
  },

  registerButton: {
    alignItems: 'center',
    backgroundColor: Colors.theme,
    borderRadius: 4,
    height: 46,
    justifyContent: 'center',
    marginBottom: 20
  },

  twitterButton: {
    alignItems: 'center',
    backgroundColor: '#00aced',
    borderRadius: 4,
    height: 46,
    justifyContent: 'center',
    marginBottom: 20
  },

  linkText: {
    fontSize: 14,
    color: Colors.blue,
    marginBottom: 20
  }
}
