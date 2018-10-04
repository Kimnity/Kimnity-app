import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/containers'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });
});