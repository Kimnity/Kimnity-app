import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Timeline extends React.Component {

  render() {
    console.log(this.props)

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
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})