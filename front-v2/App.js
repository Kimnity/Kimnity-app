import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignUp from './src/containers/SignUp';
import SignIn from './src/containers/SignIn';
import Home from './src/containers/Home';
import { createRootNavigator } from './src/router';


// const RootStack = createStackNavigator(
//   {
//     SignUp: SignUp,
//     SignIn: SignIn,
//     Home: Home
//   },
//   {
//     initialRouteName: 'SignUp',
//   }
// );

const Layout = createRootNavigator

export default class App extends React.Component {
  render() {
    return <Layout />;
  }
}