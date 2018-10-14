import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import { USER_KEY } from '../config'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Timeline extends React.Component {
  static get options() {
    return {
      bottomBar: {
        title: {
          text: 'タイムライン'
        },
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from screen.</Text>
        <Icon name="heart" size={30} color="#900" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})