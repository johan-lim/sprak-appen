import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CheckInScreen from '../screens/CheckIn';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Glosträning',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-happy`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const CheckInStack = createStackNavigator(
  {
    CheckIn: CheckInScreen,
  },
  config
);

CheckInStack.navigationOptions = {
  tabBarLabel: 'Quiz',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-eye`
          : 'md-information-circle'
      }
    />
  ),
};

CheckInStack.path = '';

const PortfolioStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

PortfolioStack.navigationOptions = {
  tabBarLabel: 'Videolektioner',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-easel' : 'md-link'} />
  ),
};

PortfolioStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Inställningar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CheckInStack,
  PortfolioStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
