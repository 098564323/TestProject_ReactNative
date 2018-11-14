import React from 'react';
import {Platform,
  StyleSheet,
  Text,
  Keyboard,
  Alert,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
  TextInput,
  Image,TouchableOpacity} from 'react-native';
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
