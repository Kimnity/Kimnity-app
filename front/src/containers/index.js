import {Navigation} from 'react-native-navigation';
 
import LoginScreen from './login';
// import SecondTabScreen from './SecondTabScreen';
// import ThirdTabScreen from './ThirdTabScreen';
// import PushedScreen from './PushedScreen';
 
// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('kimnity.FirstTabScreen', () => LoginScreen);
  // Navigation.registerComponent('kimnity.SecondTabScreen', () => SecondTabScreen);
  // Navigation.registerComponent('kimnity.ThirdTabScreen', () => ThirdTabScreen);
  // Navigation.registerComponent('kimnity.PushedScreen', () => PushedScreen);
}