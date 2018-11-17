import React, {Component} from 'react';
import {Animated, Button, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, AsyncStorage} from 'react-native';
import axios from 'axios';
import Colors from '../const/colors'

export default class SignUp extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      mailWidth: new Animated.Value(0),
      passWidth: new Animated.Value(0),
      signUp: {
        id: null,
        pass: null
      }
    }
  }

  static navigationOptions = {
    title: 'サインイン',
    header: null
  };



  signUp = async () => {
    await AsyncStorage.setItem('userToken', 'true');

    axios.post('https://api-kimnity.herokuapp.com/api/auth',
      {
        email: this.state.signUp.id,
        password: this.state.signUp.pass
      })
      .then(response => {
        console.log(response, 3456789);
        // dispatch(receiveLoginSuccess(response.data));
        console.log('success')
        this.props.navigation.navigate('Home')
      })
      .catch(e => {
        console.log(e)
        // dispatch(receiveLoginFailed());
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
            onChangeText={(text) =>  this.setId(text)}
            value={this.state.signUp.id}
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
            value={this.state.signUp.pass}
            autoCapitalize="none"
          />
          <Animated.View
            style={{width: passWidth}}>
            <View style={{height: 2, backgroundColor: Colors.theme}}></View>
          </Animated.View>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={() => this.signUp()}>
          <Text style={styles.buttonText}>メールアドレスで登録</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.twitterButton} onPress={() => {
            // goHome();
            // Navigation.push(this.props.componentId, {
            //   component: {
            //     name: 'Home',
            //   }
            // });
          }}>
          <Text style={styles.buttonText}>Twitterで登録</Text>
        </TouchableOpacity>
        <Text style={styles.linkText} onPress={() => this.props.navigation.navigate('SignIn')}>すでにアカウントを持っている</Text>
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

  message: {
    color: Colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100
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
