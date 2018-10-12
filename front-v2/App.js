import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignUp from './src/containers/SignUp';
import SignIn from './src/containers/SignIn';

const RootStack = createStackNavigator(
  {
    SignUp: SignUp,
    SignIn: SignIn
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