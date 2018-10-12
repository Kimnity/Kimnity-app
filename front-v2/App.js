import { createStackNavigator } from 'react-navigation';
import SignUp from './src/containers/SignUp';

export default createStackNavigator({
  Home: {
    screen: SignUp
  },
});