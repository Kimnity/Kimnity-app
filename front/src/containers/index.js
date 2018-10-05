import {Navigation} from 'react-native-navigation';
 
import SignUp from './SignUp';
import Home from './Home';
import Initializing from './Initializing';

export function registerScreens() {
  Navigation.registerComponent('SignUp', () => SignUp);
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Initializing', (sc) => Initializing);
}