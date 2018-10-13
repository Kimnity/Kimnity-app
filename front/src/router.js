import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Timeline from './containers/Timeline';
import Profile from './containers/Profile';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import TlAll from './containers/TlAll';
import TlFollow from './containers/TlFollow';
import TlTop from './containers/TlTop';
import initLoad from './initLoad';

const TimelineStack = createMaterialTopTabNavigator({
  TlAll: {
    screen: TlAll,
    navigationOptions: {
      title: '全体',
    }
  },
  TlFollow: {
    screen: TlFollow,
    navigationOptions: {
      title: 'フォロー',
    }
  },
  TlTop: {
    screen: TlTop,
    navigationOptions: {
      title: 'トップ',
    }
  }
})

const AppStack = createBottomTabNavigator({
  Timeline: {
    screen: TimelineStack,
    navigationOptions: {
      title: 'タイムライン',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'プロフィール'
    }
  }
});

const AuthStack = createStackNavigator(
  {
    SignUp: SignUp,
    SignIn: SignIn
  },
  {
    navigationOptions: {
      
    }
  }
  );

export const createRootNavigator = createSwitchNavigator(
  {
    initLoad: initLoad,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'initLoad'
  }
)