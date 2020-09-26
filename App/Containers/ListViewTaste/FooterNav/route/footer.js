
/**
 *
 * @see https://blog.csdn.net/zcmain/article/details/89019747
 *
 */

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
/**
 * 底部标签导航
 */
const bottomNavigator = createBottomTabNavigator(
  /**
   * RouteConfigs
   */
  {
    //路由页面1
    bottomPage1: {
      screen: Page1,
    },
    //路由页面2
    bottomPage2: {
      screen: Page2,
    },
    //路由页面3
    bottomPage3: {
      screen: Page3,
    },
  },
  /**
   * BottomTabNavigatorConfig
   */
  {
    // andorid按下返回键将返回initalRouteName，如果设置非initalRouteName则直接结束标签导航
    backBehavior: 'none',
    // 设置首次加载的页面默认为RouteConfig中第一个(指定的必须为Routeonfig中定义的路由页面)
    //initialRouteName: 'bottomPage3',
    // 定义tab顺序的routeNames数组
    //order: ['bottomPage1', 'bottomPage2', 'bottomPage3'],
    //导航栏选项
    tabBarOptions: {
      //设置是否显示tab上图标
      showIcon: true,
      //设置tab激活时文字和图标(前提是tabBarIcon的style设置tintColor)颜色
      activeTintColor: '#fd742f',
      //设置tab未激活文字和图标(前提是tabBarIcon的style设置tintColor)颜色
      inactiveTintColor: '#a6a1aa',
      //设置tab激活时候背景颜色
      activeBackgroundColor: '#e0dce0',
      //设置整个tabbar的样式(背景颜色、高等（ height: 55）)
      style: { backgroundColor: '#f5f4f9', height: 55 },
      //设置tab上文字样式(可设置字体大小等、内边距等)
      labelStyle: { fontSize: 16 },
      // 设置单个tab样式
      //tabStyle:{backgroundColor:'#9524d3',},
      // 设置是否显示tab文字
      //showLabel: true,
      // 设置tab未激活时候背景颜色
      //inactiveBackgroundColor:'#a4d9ff',
    },
  });

const bottomAppContainer = createAppContainer(bottomNavigator);
export default bottomAppContainer;



