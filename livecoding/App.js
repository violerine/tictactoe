import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './components/home'
import PlayScreen from './components/play'
import GameoverScreen from './components/gameover'

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Play : PlayScreen,
    Gameover : GameoverScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Play') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Gameover') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);