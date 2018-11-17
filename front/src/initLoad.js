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
    console.log(userToken)
    if(userToken) {
      this.props.navigation.navigate("App");
    } else {
      this.props.navigation.navigate("Auth");
    }

  }

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