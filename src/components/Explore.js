import React from 'react';
import {Text,View} from 'react-native';
import * as globalStyles from '../styles/global';

export default class Explore extends React.Component {

    static navigationOptions = {
      header: null,
    };

    render() {
      return (
        <View style={globalStyles.COMMON_STYLES.background}>
          <Text>Explore</Text>
        </View>
      );
    }
}
