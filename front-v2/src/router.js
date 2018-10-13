import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';

const AppStack = createStackNavigator({
  Home: Home
});

const AuthStack = createStackNavigator({
  SignUp: SignUp,
  SignIn: SignIn
});

export const createRootNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
)