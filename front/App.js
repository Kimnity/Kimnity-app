import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignUp from './src/containers/SignUp';
import SignIn from './src/containers/SignIn';
import { createRootNavigator } from './src/router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducer';

const Layout = createRootNavigator

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Layout />
      </Provider>
    )
  }
}