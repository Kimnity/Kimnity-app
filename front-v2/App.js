import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignUp from './src/containers/SignUp';
import SignIn from './src/containers/SignIn';
import Home from './src/containers/Home';

const RootStack = createStackNavigator(
  {
    SignUp: SignUp,
    SignIn: SignIn,
    Home; Home
  },
  {
    initialRouteName: 'SignUp',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}