import { Navigation } from 'react-native-navigation';

export const goToAuth = () => Navigation.setRoot({
  root: {
    component: {
      name: 'SignUp'
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'Home',
          }
        }
    ],
    }
  }
});