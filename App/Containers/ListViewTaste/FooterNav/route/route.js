import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

// import Welcome from '../WelcomeComponent'
// import TopNavigator from './TopNavigatorComponent'
import BottomNavigator from './footer'
/**
* 栈式导航
*/
const stackNavigator = createStackNavigator(
  //指定要加载的RN组件
  {
      // welcomePage: {
      //     screen: Welcome,
      // },
      // topNavigatorPage: {
      //     screen: TopNavigator,
      //     navigationOptions: () => ({
      //         header: null,
      //     })
      // },
      bottomNavigatorPage: {
          screen: BottomNavigator,
          navigationOptions: ({}) => ({
              header: null,
          })
      }
  }
);
const appStackNavigator = createAppContainer(stackNavigator);
export default appStackNavigator;
