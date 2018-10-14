import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  ScrollView
} from 'react-native'
import { USER_KEY } from '../config'

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
      }
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hello from screen.</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})