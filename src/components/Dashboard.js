import React from 'react';
import {Image,StyleSheet} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import * as globalStyles from '../styles/global';
import Chat from '../components/Chat';
import Explore from '../components/Explore';
import Profile from '../components/Profile';

class Dashboard extends React.Component {

    render() {
      return (
        <View/>
      );
    }
  }

const ExploreStack = createStackNavigator({
  Explore: { screen: Explore }
});

const ChatStack = createStackNavigator({
  Chat: {screen: Chat}
});

const ProfilStack = createStackNavigator({
  Profile: {screen: Profile}
});

export default createBottomTabNavigator(
  {
    Explore: { screen: ExploreStack },
    Chat: {screen: ChatStack},
    Profile: { screen: ProfilStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        /*Explore Tab is selected */
        if (routeName === 'Explore') {
          if (focused) {
            return <Image source={require('../images/exploreIcon_selected.png')}/>;
          }else{
            return <Image source={require('../images/exploreIcon.png')}/>;
          }
        }
        /*Chat Tab is selected */
        else if (routeName === 'Chat') {
          if (focused) {
            return <Image source={require('../images/bubble_selected.png')}/>;
          }else{
            return <Image source={require('../images/bubble.png')}/>;
          }
        }
        /*Profile Tab is selected */
        else if (routeName === 'Profile') {
          if (focused) {
            return <Image source={require('../images/profileIcon.png')}/>;
          }else{
            return <Image source={require('../images/profileIcon_unselected.png')}/>;
          }
        }
        //
      },
    }),
    /*Bottom TabBar Style */
    tabBarOptions: {
      style: {
              borderTopColor: 'transparent',
              borderTopWidth: 0,
              paddingRight: 0,
              paddingLeft: 0,
              borderTopWidth: 0,
              borderTopColor: "gray"
        }
    },
    /*Starting tab */
    initialRouteName: 'Profile',
  }
);
