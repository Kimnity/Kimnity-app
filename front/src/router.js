import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Timeline from './containers/Timeline';
import Profile from './containers/Profile';
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import TlAll from './containers/TlAll';
import TlFollow from './containers/TlFollow';
import TlTop from './containers/TlTop';
import initLoad from './initLoad';

import Colors from './const/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
const TimelineStack = createMaterialTopTabNavigator(
  {
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
        title: 'トップユーザー',
      }
    }
  },
  {
    tabBarOptions: {

      activeTintColor: Colors.theme,
      inactiveTintColor: Colors.black,

      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold'
      },

      indicatorStyle: {
        backgroundColor: Colors.theme,
        height: 4
      },

      style: {
        backgroundColor: Colors.white,
        height: 50,
        paddingTop: 6,
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowColor: 'black',
        shadowOffset: { height: 2, width: 0 },
      },
    }
  },
  {
    navigationOptions: {
      headerTitle: 'タイムライン'
    }
  }
)

const AppBottomTab = createBottomTabNavigator(
  {
    Timeline: {
      screen: TimelineStack,
      navigationOptions: {
        title: 'タイムライン',
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'aaa',
        tabBarLabel: 'プロフィール'
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({

      headerTitle: 'fljskad',

      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Timeline') {
          iconName = 'list-ul';
        } else if (routeName === 'Profile') {
          iconName = 'user';
        }
        return <Icon name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.theme,
      inactiveTintColor: Colors.grayDark,
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

AppBottomTab.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  console.log(routeName,98)


  let headerTitle;

  if(routeName === 'Timeline') {
    headerTitle = 'タイムライン'
  } else if (routeName === 'Profile') {
    headerTitle = 'プロフィール'
  }

  return {
    headerTitle,
  };
};

const AppStack = createStackNavigator(
  {
    App: {
      screen: AppBottomTab,
      navigationOptions: {
        headerStyle: {
          borderBottomWidth: 0,
        }
      },
    }
  }
)

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