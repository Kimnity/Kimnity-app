import React from 'react';
import {
  View,
  Text,
  Animated,
  Button,
  Stylesheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import axios from 'axios';
import Colors from '../const/colors'

export default class UserRegister extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameWidth: new Animated.Value(0),
      name: null
    }
  }

  register = async () => {
    console.log(5678)
    axios.put('https://api-kimnity.herokuapp.com/api/auth',
      {
        headers: {
          'access-token': '3auL6KaDTANyvzOScOVj3Q',
          client: 'Lf1ZHN71rv7Jq_8VcQRV_g',
          uid: 'morooka1@gmail.com'
        },
        name: this.state.name
      })
      .then(response => {
        console.log(response, 3456789);
        this.props.navigation.navigate('Home')
      })
      .catch(e => {
        console.log(e)
      });
  }

  onFocus(type) {
    let width = this.state.nameWidth;
    width.setValue(0);
    Animated.timing(
      width,
      {toValue: 1, duration: 200}
    ).start()
  }

  onBlur(type) {
    let width = this.state.nameWidth;
    Animated.timing(
      width,
      {toValue: 0, duration: 200}
    ).start()
  }

  setName(text) {
    this.setState({
      name: text
    })
  }

  render() {
    let nameWidth = this.state.nameWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%']
    });

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>ユーザー名</Text>
          <TextInput
            style={styles.input}
            placeholder="筋肉 ムキ男"
            onFocus={() => this.onFocus()}
            onBlur={() => this.onBlur()}
            onChangeText={(text) =>  this.setName(text)}
            autoCapitalize="none"
            value={this.state.name}
          />
          <Animated.View
            style={{width: nameWidth}}>
            <View style={{height: 2, backgroundColor: Colors.theme}}></View>
          </Animated.View>
        </View>
        <TouchableOpacity style={styles.registerButton} onPress={() => this.register()}>
          <Text style={styles.buttonText}>メールアドレスで登録</Text>
        </TouchableOpacity>
      </View>
    )
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
