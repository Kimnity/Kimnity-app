import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import { USER_KEY } from '../config'

export default class Timeline extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
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