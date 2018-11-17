import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  SignUp: { screen: DetailScreen },
}, {
  initialRouteName: 'List',
});