import React from 'React';
import {
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';

export default class initLoad extends React.Component {

  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <ActivityIndicator />
        <StatusBar barStyle="default" /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});