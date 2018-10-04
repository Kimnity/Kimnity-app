import {Navigation} from 'react-native-navigation';
 
import SignUp from './SignUp';

export function registerScreens() {
  Navigation.registerComponent('SignUp', () => SignUp);
}