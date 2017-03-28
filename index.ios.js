/**
 * Roku remote control component for react native
 * @author: encodi.mx@gmail.com
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RemoteControl from './components/remoteControl';

export default class rokuReactNativeRemoteControl extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Roku Remote Control
        </Text>
        <RemoteControl />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('rokuReactNativeRemoteControl', () => rokuReactNativeRemoteControl);
