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
      // ユーザー情報は初回api取得後変更があるまでstate管理
      // タイムライン等は画面表示ごとにapi
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