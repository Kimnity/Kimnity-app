import {Navigation} from 'react-native-navigation';
 
import Initializing from './Initializing';
import SignUp from './SignUp';
import Home from './Home';
// import SecondTabScreen from './SecondTabScreen';
// import ThirdTabScreen from './ThirdTabScreen';
// import PushedScreen from './PushedScreen';
 
// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('kimnity.SignUpScreen', () => SignUp);
  Navigation.registerComponent('kimnity.Initializing', () => Initializing);
  Navigation.registerComponent('kimnity.Home', () => Home);
  // Navigation.registerComponent('kimnity.SecondTabScreen', () => SecondTabScreen);
  // Navigation.registerComponent('kimnity.ThirdTabScreen', () => ThirdTabScreen);
  // Navigation.registerComponent('kimnity.PushedScreen', () => PushedScreen);
}