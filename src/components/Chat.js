import React from 'react';
import {View,Text} from 'react-native';
import * as globalStyles from '../styles/global';

export default class Chat extends React.Component {
    static navigationOptions = {
      header: null,
    };
    render() {
      return (
        <View style={globalStyles.COMMON_STYLES.background}>
          <Text>Chat</Text>
        </View>
      );
    }
  }
