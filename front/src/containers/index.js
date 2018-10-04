import {Navigation} from 'react-native-navigation';
 
import SignUp from './SignUp';
import Initializing from './Initializing';

export function registerScreens() {
  Navigation.registerComponent('SignUp', () => SignUp);
  Navigation.registerComponent('Initializing', (sc) => Initializing);
}